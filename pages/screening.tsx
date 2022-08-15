import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import {
    Container,
    Button,
    ToggleButtonGroup,
    ToggleButton,
} from 'react-bootstrap';
import styles from '../styles/Screening.module.css';
import axios from 'axios';
import { encode as base64_encode } from 'base-64';

const Screening: React.FC = () => {
    const [images, setImages] = useState([]);
    const [prediction, setPrediction] = useState([{
        xmin: 0,
        ymin: 0,
        xmax: 0,
        ymax: 0,
        confidence: 0,
        class: 0,
        name: '',
    }]);
    const [bboxImage, setBboxImage] = useState('');

    const maxNumber = 1;

    const onChange = (imageList: any, addUpdateIndex: any) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        console.log(images[0]);

        const formData = new FormData();
        formData.append('image', (images[0] as any).file);
        
        axios.post('http://localhost:4001/v1/object-detection/predict', formData)
            .then(res => setPrediction(res.data))
            .catch(err => console.log(err));
    }

    const getBboxImage = (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('input_image', (images[0] as any).file);

        axios.post(`http://localhost:4001/v1/object-detection/image?bbox=${prediction[0].xmin},${prediction[0].ymin},${prediction[0].xmax},${prediction[0].ymax}`, formData, {
            responseEncoding: 'binary',
            responseType: 'arraybuffer',
        })
            .then(res => {
                // console.log(res.data)
                let b64Image = Buffer.from(res.data).toString('base64');
                let b64Path = 'data:image/jpeg;base64,' + b64Image;
                console.log(b64Path);
                setBboxImage(b64Path);
            })
            .catch(err => console.log(err));
    }

    return (
        <Container>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url">
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    <div
                        className={`${styles.uploadImageWrapper} upload__image-wrapper`}>
                        <div className={styles.imageUploadButtonContainer}>
                            <Button
                                className={styles.imageUploadButton}
                                variant="light"
                                style={
                                    isDragging ? { color: 'red' } : undefined
                                }
                                onClick={onImageUpload}
                                {...dragProps}>
                                <div className={styles.text}>
                                    <span>+</span>
                                    <p>Select or Drag Image</p>
                                </div>
                            </Button>
                            <ToggleButtonGroup
                                style={{ width: '100%' }}
                                type="radio"
                                name="options"
                                defaultValue={1}>
                                <ToggleButton
                                    className={styles.imageType}
                                    id="tbg-radio-1"
                                    value={1}>
                                    Fecal Image
                                </ToggleButton>
                                <ToggleButton
                                    className={styles.imageType}
                                    id="tbg-radio-2"
                                    value={2}>
                                    Blood Smear Image
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        &nbsp;
                        <div className={styles.imageContainer}>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img
                                        src={image['data_url']}
                                        alt="insert image"
                                        className={styles.uploadedImage}
                                    />
                                    <div
                                        className={`${styles.imageButtonWrapper} image-item__btn-wrapper`}>
                                        <Button
                                            variant="primary"
                                            onClick={() => onImageUpdate(index)}
                                            className={`${styles.imageButton} ${styles.editButton}`}>
                                            ✎
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => onImageRemove(index)}
                                            className={`${styles.imageButton} ${styles.removeButton}`}>
                                            ✕
                                        </Button>
                                    </div>
                                    <Button variant="info" className={styles.imageButton} onClick={(e) => onSubmit(e)}>Get Prediction</Button>
                                    <Button variant="info" className={styles.imageButton} onClick={(e) => getBboxImage(e)}>Get Bbox Image</Button>
                                </div>
                            ))}
                        </div>
                        <div className={styles.prediction}>
                            <div className={styles.predictionText}>
                                <b>Parasite Type</b>
                                <br />
                                {prediction ? prediction[0]['name'] : "None"}
                                <br />
                                <br />
                                <b>Confidence</b>
                                <br />
                                {prediction ? Math.round(prediction[0]['confidence'] * 10000)/100 : "None"}
                            </div>
                        </div>
                        {
                            bboxImage !== '' ? (
                                <img
                                    src={bboxImage}
                                    alt="bbox image"
                                    className={styles.uploadedImage}
                                />
                            ) : null
                        }
                    </div>
                )}
            </ImageUploading>
        </Container>
    );
};

export default Screening;
