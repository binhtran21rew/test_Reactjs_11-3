import React , {useState} from 'react'


import {imageMain1, videoMain, imageMain2, imageMain3, letterAnimation, imageContent1, imageContent2, map, imageMain4} from '../../constant';
import ContentWrapper from '../../layouts/component/contentWrapper/ContentWrapper';
import Carousel from '../../layouts/component/carousel/Carousel';

import './theHouse.scss';
import { Fade } from 'react-awesome-reveal';

const textImagePairs = [
    { text: "Surf", img: imageMain2, title: 'Cook up a feast in the fully equipped kitchen' },
    { text: "Swim", img: imageMain1, title: 'Soak up the scenery from the hot tub' },
    { text: "Fram Walk", img: imageMain3, title: 'Cook up a feast in thefully equipped kitchen' },
    { text: "Beach hikes", img: imageMain4, title: 'Relax in the comfort of the living room' },
    { text: "Lawn Games", img: imageContent1, title: 'Soak up the scenery from the hot tub' },
    { text: "Kayak", img: imageContent2, title: 'Cook up a feast in the fully equipped kitchen'  },
    { text: "Mountain Bike Park", img: imageContent1, title: 'Relax in the comfort of the living room'  },
  ];


function TheHouse() {
    const [clickImage, setClickImage] = useState(null);
    const [selected, setSelected] = useState(null);

    const handleClickImage = (item, text) => {
        
        setClickImage(item.img)
        setSelected(item.text)
    }

  return (
    <div className='TheHouse'>
        <section className='TheHouse_content mt-50'>
            <div className="TheHouse_content_title">
             50-hectare <span>luxury estate</span> <br></br>  overlooking Coromandel’s Pacific shores
            </div>
        </section>
        <section className='content_image'>
            <img src={imageMain1} width={'100%'}/>
            <ul>
                <li>20 Guests</li>
                <li>9 Bedrooms</li>
                <li>6 Bathrooms</li>
            </ul>
        </section>

        <section style={{height: '100%'}}>
            <ContentWrapper 
                name="Scottish Mansion"
                detail="
               Welcome to the heart of Hillbrook Estate, the Main House. This 7-bedroom homestead, inspired by the elegance of a Scottish mansion, offers luxurious accommodations and sweeping views of the Pacific Ocean. 
               Perfect for large groups or family gatherings, the Main House serves as the centerpiece of your unforgettable getaway. Booking the Main House is required to access our additional accommodations in The Stables.
                "
                option="VIEW ALL SERVICES"
            />

            <Carousel 
                image={[imageMain1, imageMain2, imageMain3, imageMain4, imageMain1, imageMain2]}
            />
        </section>

        <section>
            <ContentWrapper 
                moreImage={[imageMain2]}
                flexEnd="true"
                name="Curated Services"
                detail="
                    Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                "
                option="VIEW ALL SERVICES"
                image={[imageMain1]}
                image_name={['Private Chef', 'massage', 'Private Chef']}
            />
        </section>

        <section style={{height: '100%'}}>
            <Carousel 
                image={[imageMain1, imageMain2, imageMain3, imageMain4, imageMain1, imageMain2]}
            />
        </section>

        <section className='ChangeImage'>

            <div className="image_container" style={{background: `url('${clickImage}') no-repeat center center/cover`, width: '100%', height: '100vh'}}>
                {textImagePairs.map((item, index) => (
                    <div
                    key={index}
                    className="item_image"
                    onClick={() => handleClickImage(item)}
                    >
                    <p className="image_text">{item.text}</p>
                    {selected === item.text ? <Fade className='fadeText'>{item.title}</Fade> : ""}
                    </div>
                ))}
            </div>

        </section>


    </div>
  )
}

export default TheHouse