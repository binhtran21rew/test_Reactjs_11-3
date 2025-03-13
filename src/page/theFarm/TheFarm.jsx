import React from 'react'

import {imageMain1, videoMain, imageMain2, imageMain3, letterAnimation, imageContent1, imageContent2, imageMain4, imageContent5} from '../../constant';
import ContentWrapper from '../../layouts/component/contentWrapper/ContentWrapper';
import Carousel from '../../layouts/component/carousel/Carousel';
import ImageHover from '../../layouts/component/ImageHover/ImageHover';
import { Fade, Slide } from 'react-awesome-reveal';
import './theFarm.scss';
import HeroImage from '../../layouts/component/heroImage/HeroImage';

function TheFarm() {
  return (
    <div className="TheFarm">
        <section>
            <HeroImage image={imageMain2} title="the Farms" />
        </section>
        <div className="wrapper">
            <section>
                    <ContentWrapper 
                        name="Regenerating native forest and scenic paddocks"
                        detail="
                            Explore our gallery to experience the beauty and charm of Hillbrook Estate. From stunning interiors to picturesque landscapes, our photos showcase the unique features and unforgettable moments awaiting you.
                        "
                        option="VIEW ALL SERVICES"
                    />
            </section>

            <section className='ChangeImage'>
                <div className="image_container" style={{background: `url('${imageMain2}') no-repeat center center/cover`, width: '100%', height: '100vh'}}>
                </div>
            </section>

            <section>
                <ContentWrapper 
                    name="Scottish Mansion"
                    detail="
                Welcome to the heart of Hillbrook Estate, the Main House. This 7-bedroom homestead, inspired by the elegance of a Scottish mansion, offers luxurious accommodations and sweeping views of the Pacific Ocean. 
                Perfect for large groups or family gatherings, the Main House serves as the centerpiece of your unforgettable getaway. Booking the Main House is required to access our additional accommodations in The Stables.
                    "
                    option="VIEW ALL SERVICES"
                    flexEnd ={true}
                    image={[imageContent5]}
                    moreImage={imageContent1}
                />

            </section>
            <section>
                <ContentWrapper 
                    name="Scottish Mansion"
                    detail="
                Welcome to the heart of Hillbrook Estate, the Main House. This 7-bedroom homestead, inspired by the elegance of a Scottish mansion, offers luxurious accommodations and sweeping views of the Pacific Ocean. 
                Perfect for large groups or family gatherings, the Main House serves as the centerpiece of your unforgettable getaway. Booking the Main House is required to access our additional accommodations in The Stables.
                    "
                    option="VIEW ALL SERVICES"
                />

            </section>
        </div>

        <section style={{height: '100%'}}>
            <Carousel 
                image={[imageMain1, imageMain2, imageMain3, imageMain4, imageMain1, imageMain2]}
            />
        </section>

        <div className="wrapper">
            <section>
                <ContentWrapper 
                    name="Restored ponds, native trees, lively ecosystem"
                    detail="
                We are deeply committed to the restoration and preservation of our natural environment. Replanting native trees and restoring the ponds into a thriving habitat. 
                This careful reforestation effort not only enhances the beauty of the estate but also supports local wildlife, creating a harmonious balance between luxury and nature.
                    "
                    image={[imageMain3]}
                    flexEnd={true}
                />

            </section>
            <section>
                <ContentWrapper 
                    name="Explore the walking tracks"
                    detail="
             Stroll through ancient pohutukawa forests, uncover hidden streams, and take in the panoramic views of the Pacific Ocean. Along the way, you'll see our permaculture practices in action, the native trees we've replanted, and the lively ecosystem thriving around the restored pond. These maintained trails offer a direct connection
              to our conservation efforts and the natural wonders of the land.
                    "
                    image={[imageMain3]}
                    moreImage={[imageMain4]}
                />

            </section>
            <section>
                <div className='Main_image' style={{backgroundImage: `url(${imageContent5})` }}>
                    <Slide keyframes={letterAnimation} style={{width: '80%'}}>
                        <div className={`text`}>
                            <div className="">Relax or explore  <br></br> your
                            very own <span>personal playground</span> </div>
                        </div>
                    </Slide>
                </div>
            </section>
        </div>

    </div>
  )
}

export default TheFarm