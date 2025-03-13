import React, { useState } from 'react'

import './galleryImage.scss';


import { gallery1, gallery2, gallery3, imageMain1, imageMain2 } from '../../../constant';
import { li } from 'motion/react-client';
const optionGallery = [
    {id: 1, text: 'all', images: [imageMain1, gallery1, gallery2, imageMain1, gallery1, gallery2,imageMain1, gallery1, gallery2, imageMain1, gallery1, gallery2]},
    {id: 2, text: 'the main house', images: [gallery1, gallery2, imageMain1, gallery1, gallery2]},
    {id: 3, text: 'the stables', images: [gallery3, imageMain2, gallery2, imageMain1, gallery1]},
    {id: 4, text: 'the property', images: [gallery2,imageMain1, gallery1, gallery2]},
    {id: 5, text: 'the beach', images: [imageMain1, gallery1, gallery2, imageMain1]},
]
function GalleryImage() {
    const [imageId, setImageId] = useState();
    const handleClick = (id) => {
        setImageId(id);
    }
    return (
        <div className="GallaryImage">
            <div className="title">
            our Gallery
            </div>
            <div className="gallery_wrapper">


            <div className="left">
                <ul>
                    {
                        optionGallery.map((item, id) => {
                            return(
                                <li onClick={() => handleClick(item.id)}>{item.text}</li>
                            )
                        })
                    }

                </ul>
            </div>

            {
                optionGallery.map((item, id) => {
                    return(
                        <div className={`right ${imageId === item.id ? '' : 'hide'} `}>
                            <ImagePosition 
                                images={item.images}
                                widths={[100, 70, 20, 40, 60, 30, 100, 100, 20, 30, 60, 30]}
                            />
                        </div>

                    )
                })
            }

            
                {/* <ImagePosition 
                images={[imageMain1, gallery1, gallery2, imageMain1, gallery1, gallery2,imageMain1, gallery1, gallery2, imageMain1, gallery1, gallery2]}
                widths={[100, 70, 20, 40, 60, 30, 100, 100, 20, 30, 60, 30]}
                /> */}

            </div> 
        </div>
    
    )
}

const ImagePosition = ({...props}) => {
    const {images, widths} = props;

    return(
        <div className="Gallery_postion">
            {images.map((data, id) => {
                return (
                    // <div className="item_wrap">
                        <img key={id} src={data} alt={data} className={`gallery_image`} width={`${widths[id]}%`} height={'100%'} />
                    // </div>
                )
            })}
        </div>
    )
}

export default GalleryImage