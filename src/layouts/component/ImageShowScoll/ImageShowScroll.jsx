import React, { useState, useRef, useEffect } from "react";
import Carousel from "../../../layouts/component/carousel/Carousel";


import './imageShowScroll.scss';
function ImageShowSrcoll({ ...props }) {
    const { images } = props;
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = (event) => {
            if (scrollRef.current) {
                event.preventDefault();
                scrollRef.current.scrollLeft += event.deltaY;
            }
        };

        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("wheel", handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("wheel", handleScroll);
            }
        };
    }, []);

    return (
        <div className="ImageShowSrcoll container py-4">
            <div className="image-grid row g-2">
                {images.map((img, index) => (
                    <div key={index} className="col-6 col-md-3">
                        <img
                            src={img}
                            alt={`Image ${index + 1}`}
                            className="img-fluid rounded shadow-sm cursor-pointer"
                            data-bs-toggle="modal"
                            data-bs-target="#imageModal"
                            onClick={() => setSelectedIndex(index)}
                            style={{ height: "100%", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>

            <div
                className="modal fade"
                id="imageModal"
                tabIndex="-1"
                aria-labelledby="imageModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content blur-bg">
                        <div className="modal-header border-0">
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="ImageShowScroll_modal modal-body d-flex flex-column align-items-center">
                          <div className="w-100">
                              <Carousel 
                                image={images} 
                                slidesPerView={1} 
                                selectedIndex={selectedIndex}
                              />

                          </div>

                            <div
                                ref={scrollRef}
                                className="mt-3 w-100"
                                style={{
                                    overflowX: "auto",
                                    whiteSpace: "nowrap",
                                    maxWidth: "100%",
                                    scrollBehavior: "smooth",
                                }}
                            >
                                <div
                                    className="d-flex flex-nowrap gap-2 px-3"
                                    style={{ minWidth: "max-content" }}
                                >
                                    {images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            className={`img-fluid rounded shadow-sm ${
                                                index === selectedIndex
                                                    ? "border border-primary"
                                                    : ""
                                            }`}
                                            alt={`Thumbnail ${index + 1}`}
                                            onClick={() => setSelectedIndex(index)}
                                            style={{
                                                cursor: "pointer",
                                                width: "120px",
                                                height: "80px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageShowSrcoll;
