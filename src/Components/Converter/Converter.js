import React, { useRef, useState } from 'react'
import "./Converter.css"
import FilesUploadImage from "../../images/filesuploadimg.png";
import { TfiReload } from 'react-icons/tfi';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Convertfiles from './Convertfiles';
const Converter = () => {
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
    const [dragging, setDragging] = useState(false);
    const [filePreview, setFilepreview] = useState([]);

    const handleDragEnter = (event) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragging(false);
        const convertFiles=[];
        const droppedFile = event.dataTransfer.files;
       for (let i = 0; i < droppedFile.length; i++) {
        const element = droppedFile[i];
        convertFiles.push(element);
        
       }
        // droppedFile.map(file=>console.log(file));
     //   console.log(typeof droppedFile, "dropped file")
        setFilepreview(convertFiles);
    };
    const handleRemoveFile = (name) => {

        console.log({name})
        // setFilepreview([]);
        setFilepreview((f) => f.filter((n) => n.name !==name ))
    };
    
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const selectfiles=[]
        const file = event.target.files;
            for (let i = 0; i < file.length; i++) {
                const element = file[i];
                selectfiles.push(element);
                
            }
        setFilepreview(selectfiles);
    };
    const [tooglecross, setTooglecross] = useState(false);
    const handleChangeCross = () => {
        setTooglecross(!tooglecross);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='home_page_height'>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-center'>
                                <h1 className='cloud_file_converter mb-4 mt-lg-5'>
                                    Cloud File Converter
                                </h1>
                                <p className='file_converter_description'>CloudConvert is an online file converter. We support nearly all audio, video, document, ebook, archieve, image, spreadsheet, and presentation formats. To get started, use the button below and select files to convert from your computer.</p>
                                {filePreview.length > 0 ?
                                    <div className='mt-lg-5'>
                                        <div className='col-12 pt-lg-5 mt-5'>
                                            {filePreview.map((selectedfilename, index) => (
                                                <div key={index}>
                                                <Convertfiles
                                                 selectedfilename={selectedfilename}
                                                 handleRemoveFile={handleRemoveFile}
                                                 handleChangeCross={handleChangeCross}/>
                                                </div>
                                            ))}
                                         
                                        </div>
                                        <div className='col-12'>
                                            <div className='d-flex justify-content-end mt-4 mb-4'>
                                                {progress == 0 ?
                                                    <>
                                                        <button className='download_btn py-2 px-4'>
                                                            <TfiReload className='me-3' />Convert Now
                                                        </button> </> :
                                                    <button className='download_btn py-2 px-4'>
                                                        <AiOutlineCloudDownload fontSize={24} className='me-3' />Download
                                                    </button>}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='mt-lg-5 pt-4'>
                                        <div
                                            className="image_upload_click"
                                            onClick={handleButtonClick}
                                            onDragEnter={handleDragEnter}
                                            onDragLeave={handleDragLeave}
                                            onDragOver={handleDragOver}
                                            onDrop={handleDrop}
                                        >
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                                multiple
                                            />
                                            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                                <div>
                                                    <img
                                                        src={FilesUploadImage}
                                                    />
                                                </div>
                                                <div>
                                                    <p className="select_files_text pt-3">
                                                        Click or Drop your Files
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Converter
