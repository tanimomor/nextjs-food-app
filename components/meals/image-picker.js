'use client'
import classes from './image-picker.module.css';
import Image from 'next/image'
import {useRef, useState} from "react";

export default function ImagePicker({label, name}) {
    const imageInput = useRef();
    const [pickedImage, setPickedImage] = useState()

    function handlePickClick(){
        imageInput.current.click();
    }

    function handleImagePick(event) {
        const file = event.target.files[0];
        if(!file){
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setPickedImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview} onClick={handlePickClick}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt="The image selected by user" fill/>}
            </div>
            <input
                className={classes.input}
                type="file"
                id={name}
                accept="image/png, image/jpeg"
                name={name}
                ref={imageInput}
                /* multiple */
                onChange={handleImagePick}
            />
            <button className={classes.button} type="button" onClick={handlePickClick}>
                Pick and Image
            </button>
        </div>

    </div>
}