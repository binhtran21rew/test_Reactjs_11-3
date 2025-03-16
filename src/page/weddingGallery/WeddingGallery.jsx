import React from "react";
import ImageShowSrcoll from "../../layouts/component/ImageShowScoll/ImageShowScroll";

import {
    gallery1,
    gallery2,
    gallery3,
    imageMain1,
    imageMain2,
    imageMain4,
    imageSwiper1,
    imageSwiper2,
    imageSwiper3,
    imageSwiper4,
    imageWedding2,
    imageWedding3,
    imageWedding4,
    imageWedding5,
} from "../../constant";

import "./weddingGallery.scss";
function WeddingGallery() {
    return (
        <div className="Weddinggallery">
            <div className="container">
                <div className="title">our Gallery Wedding</div>

                <ImageShowSrcoll
                    images={[
                      gallery1,
                      gallery2,
                      gallery3,
                      imageMain1,
                      imageMain2,
                      imageMain4,
                      imageSwiper1,
                      imageSwiper2,
                      imageSwiper3,
                      imageSwiper4,
                      imageWedding2,
                      imageWedding3,
                      imageWedding4,
                      imageWedding5,
                    ]}
                />
            </div>
        </div>
    );
}

export default WeddingGallery;
