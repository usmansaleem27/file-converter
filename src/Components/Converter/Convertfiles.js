import React, {useState} from 'react'

import { FcGallery } from "react-icons/fc"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { RxCross2 } from 'react-icons/rx';

const Convertfiles = ({selectedfilename, handleRemoveFile, handleChangeCross}) => {
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            // setProgress((oldProgress) => {
            //   if (oldProgress === 100) {
            //     return 0;
            //   }
            //   const diff = Math.random() * 10;
            //   return Math.min(oldProgress + diff, 100);
            // });
            setProgress(0)
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(2),
        },
        '& .MuiInputBase-input': {
            borderRadius: 7,
            position: 'relative',
            backgroundColor: "none",
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 10px 10px 8px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            fontFamily: [
                "Poppins"
            ].join(','),
            '&:hover': {
                borderRadius: 4,
                backgroundColor: "rgba(244, 116, 88, 0.05)",
                borderColor: '#F47458',
                boxShadow: 'none',
            },
            '&:focus': {
                borderRadius: 4,
                backgroundColor: "rgba(244, 116, 88, 0.05)",
                borderColor: '#F47458',
                boxShadow: 'none',
            },
        },
    }));
    return (
        <div>
            <div className='selected_file_preview my-3'>
                <div className='row pt-3 pb-3'>
                    <div className='col-lg-5 col-md-6 col-12'>
                        <div className='d-flex align-items-center h-100 justify-content-lg-start justify-content-md-start justify-content-center'>
                            <div className='py-lg-0 py-md-0 py-3'>
                                <p className='file_name_preview mb-0 ps-3'><FcGallery fontSize={30} className='me-3' />{selectedfilename?.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-10'>
                        <div className=''>
                            <div className='d-flex align-items-center justify-content-lg-start justify-content-center'>
                                <div>
                                    <span className='file_name me-3'>Convert to :</span>
                                </div>
                                <FormControl sx={{ minWidth: 80 }}>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        input={<BootstrapInput />}
                                    >
                                        <MenuItem value={10}>JPG</MenuItem>
                                        <MenuItem value={20}>PNG</MenuItem>
                                        <MenuItem value={30}>SVG</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-3 col-2'>
                        <div className='d-flex align-items-center h-100 justify-content-lg-end justify-content-md-end justify-content-center me-lg-4 me-md-3'>
                            
                                {/* <Box sx={{ width: '50%' }}>
                                    <LinearProgress variant="determinate" value={progress} />
                                </Box> */}
                                <RxCross2 style={{ cursor: "pointer" }} 
                                onClick={(e) => handleRemoveFile(selectedfilename.name)} 
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Convertfiles
