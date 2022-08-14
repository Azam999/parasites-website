import React from 'react';
import ImageUploading from 'react-images-uploading';
import {
    Container,
    Button,
    ToggleButtonGroup,
    ToggleButton,
} from 'react-bootstrap';
import styles from '../styles/Screening.module.css';

const Screening: React.FC = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList: any, addUpdateIndex: any) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

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
                                    <Button variant="info" className={styles.imageButton}>Get Prediction</Button>
                                </div>
                            ))}
                        </div>
                        <div className={styles.prediction}>
                            <h4 className={styles.predictionText}></h4>
                        </div>
                    </div>
                )}
            </ImageUploading>
        </Container>
    );
};

export default Screening;
