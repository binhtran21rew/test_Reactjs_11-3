import React from 'react'

import {imageMain1, videoMain, imageMain2, imageMain3, letterAnimation, imageContent1, imageContent2, imageMain4, imageContent5} from '../../constant';
import ContentWrapper from '../../layouts/component/contentWrapper/ContentWrapper';
import Carousel from '../../layouts/component/carousel/Carousel';
import ImageHover from '../../layouts/component/ImageHover/ImageHover';
import { Fade, Slide } from 'react-awesome-reveal';
import './theFarm.scss';
import HeroImage from '../../layouts/component/heroImage/HeroImage';
import ImageSlide from '../../layouts/component/imageSlide/ImageSlide';

function TheFarm() {


  return (
    <div className="TheFarm">
        <HeroImage image={imageMain2} title="the Farms" />
        <div className="container">
            <section>
                <ContentWrapper 
                    name="Regenerating native forest and scenic paddocks"
                    detail="

Hillbrook Estate is not just a luxury retreat; it's also a working farm where around 100 young dairy calves graze in our lush, green paddocks, all while enjoying the breathtaking views. Guests have private access to a stunning white sandy Coromandel beach, just a 15-minute walk from the Main House through an ancient pohutukawa forest. This pristine beach boasts a fantastic surf break and excellent fishing opportunities, making it a perfect spot for relaxation and adventure.                    "
                    option="VIEW ALL SERVICES"
                    textHighlight={"native forest scenic"}
                    textPosition
                />
            </section>

            <section className='ChangeImage'>
                <div className="image_container" style={{background: `url('${imageMain2}') no-repeat center center/cover`, width: '100%', height: '100vh'}}>
                </div>
            </section>

            <section className='image_container'>
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
            <section className='vh-75'>
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

        <section>
            <Carousel 
                image={[imageMain1, imageMain2, imageMain3, imageMain4, imageMain1, imageMain2]}
            />
        </section>

        <div className="container">
            <section className='image_container'>
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
            <section  className='image_container'>
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
        </div>

        <section>
            <ImageSlide
                image={imageContent5}
                text="Relax or explore your very own personal playground"
                textHightlight="personal playground"
            />
        </section>


    </div>
  )
}

export default TheFarm