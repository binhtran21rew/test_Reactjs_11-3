import React from 'react';

import './vendor.scss';

import { gallery1, gallery2, gallery3, imageMain1, imageMain2, imageMain3 } from '../../constant';

import HeroImage from '../../layouts/component/heroImage/HeroImage';
import ContentWrapper from '../../layouts/component/contentWrapper/ContentWrapper';
import GalleryImage from '../../layouts/component/galleryImage/GalleryImage';
import DropDown from '../../layouts/component/dropDown/DropDown';
function Vendor() {
  return (
    <div className='Vendor'>
        <HeroImage image={imageMain3} title={"vendor"} />

        <div className="container">
        <section>
                <ContentWrapper 
                    name="We’ve curated a list of the very best wedding vendors for effortless planning"
                    detail="
Choosing our preferred wedding vendors ensures a stress-free planning experience. Dedicated to bringing your vision to life with impeccable service and attention to detail.

Explore our network of selected wedding vendors  and enquire directly with them below"
                    textHighlight={"effortless planning"}
                    option="contact us"
                    textPosition
                />
            </section>
            {/* <section>
            <GalleryImage 
                list={
                    [
                        {id: 1, text: 'all', images: [imageMain1, gallery1, gallery2, imageMain1, gallery1, gallery2,imageMain1, gallery1, gallery2, imageMain1, gallery1, gallery2]},
                        {id: 2, text: 'the main house', images: [gallery1, gallery2, imageMain1, gallery1, gallery2]},
                        {id: 3, text: 'the stables', images: [gallery3, imageMain2, gallery2, imageMain1, gallery1]},
                        {id: 4, text: 'the property', images: [gallery2,imageMain1, gallery1, gallery2]},
                        {id: 5, text: 'the beach', images: [imageMain1, gallery1, gallery2, imageMain1]},
                    ]
                }
                />
            </section> */}
                        <section className="container py-5">
              <h2 className="text-center fw-light">
                    <em>Vendor </em> <span className="fw-normal">FAQs</span>
                </h2>
                <p className="text-center">
                    Find the answers to your most pressing wedding questions or
                    get in touch.
                </p>
                <DropDown
                faqItems={[
                    {
                        title:
                            "Do you have a local caterer who can provide breakfast for the “recovery brunch” the day after the wedding?",
                        more: "Yes: We have “The day after” recovery brunch and breakfast options available, subject to availability and must be booked in advance. Please inquire.",
                    },
                    {
                         title:
                            "Is there any accommodation on site for vendors to stay in for the wedding?",
                        more: "Yes. We have a 3 bedroom, 2 bathroom farm cottage available for vendors. Your vendors such as catering, photographers may enjoy staying here to avoid late night travel. Please contact our Estate manager to book this. A small nightly rate applies to cover cleaning and sheets, this is generally paid for by your vendor.",
                    },
                    {
                         title:
                            "Are vendors able to make deliveries to the site or start the marquee set up prior to the bride checking in to Hillbrook?",
                        more: "Yes they are. We can arrange times and storage for items arriving at Hillbrook before the wedding day. Please speak with our estate managers to confirm.",
                    },
                    {
                         title:
                            "Does Hillbrook have any seats or benches for the ceremony lawn or do we need to hire extra for this area?",
                        more: "We provide a limited number of benches, and extra seating can be arranged upon request.",
                    },
                    {
                         title:
                            "Would our dog be allowed on site to be part of the wedding ceremony?",
                        more: "Yes! We welcome pets as part of your special day.",
                    },
                ]}
                extraFaqs={[
                    {
                        title: "Can we bring our own caterers?",
                        more: "Yes, we allow external caterers with prior arrangement.",
                    },
                    {
                        title:
                            "Do you offer indoor options in case of bad weather?",
                        more: "Yes, we have a beautiful indoor space available as a backup.",
                    },
                    {
                      title: "Can we bring our own caterers?",
                      more: "Yes, we allow external caterers with prior arrangement.",
                  },
                  {
                      title:
                          "Do you offer indoor options in case of bad weather?",
                      more: "Yes, we have a beautiful indoor space available as a backup.",
                  },

                ]}
            />
            </section>
        </div>
        <section className="ChangeImage">
            <div
                className="image_container"
                style={{
                    background: `url('${imageMain2}') no-repeat center center/cover`,
                    width: "100%",
                    height: "100vh",
                }}
            ></div>
        </section>
    </div>
  )
}

export default Vendor