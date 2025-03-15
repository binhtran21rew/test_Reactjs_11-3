import React from "react";

import {
  imageMain1,
  videoMain,
  imageMain2,
  imageWedding1,
  imageWedding2,
  imageWedding3,
} from "../../constant";
import ContentWrapper from "../../layouts/component/contentWrapper/ContentWrapper";
import Carousel from "../../layouts/component/carousel/Carousel";

import ImageHover from "../../layouts/component/ImageHover/ImageHover";
import { Fade, Slide } from "react-awesome-reveal";
import "./wedding.scss";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import BoxContent from "../../layouts/component/boxContent/BoxContent";
import BookingFormPrice from "../../layouts/component/bookingFormPrice/BookingFormPrice";
function Wedding() {
  return (
    <div className="Wedding">
      <section style={{ padding: 0 }}>
        <HeroImage image={imageMain2} title="the Farms" />
      </section>
      <div className="container">
        <section>
          <BoxContent
            text={["Your", "luxury escape", "to disconnect and reconnect"]}
            textPosition={"16.6"}
            option="book now"
            textHighlight="luxury escape"
            detail="                       
                Hillbrook Estate & Farm is a luxury coastal property and
                working farm situated just north of Whangamata on New
                Zealand's Coromandel coast. Available for exclusive
                rental, our estate is the perfect setting for your next
                luxury escape."
            splitPosition={[1, 3]}
          />
        </section>

        <section>
          <video
            src={videoMain}
            className="Main_video"
            autoPlay={true}
            loop
          ></video>
        </section>
        <section>
          <ContentWrapper
            flexEnd="true"
            rotate="true"
            name="
Intimately exclusive celebrations"
            detail="
                            Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                        "
            option="VIEW ALL SERVICES"
            image={[imageWedding1]}
            textHighlight={"celebrations"}
          />
        </section>

        <section>
          <ContentWrapper
            // rotate="true"
            flexEnd
            name="Two self contained executive suites"
            detail="
                            Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                        "
            option="VIEW ALL SERVICES"
            image={[imageWedding2]}
            textHighlight={"self contained"}
          />
        </section>
        <section>
          <ContentWrapper
            flexEnd="true"
            rotate="true"
            name="Two self contained executive suites"
            detail="
                            Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                        "
            option="VIEW ALL SERVICES"
            image={[imageWedding2]}
            textHighlight={"self contained"}
            moreImage={[imageWedding1]}
          />
        </section>
        <ContentWrapper
          flexEnd="true"
          rotate="true"
          name="Your dream wedding in style, with love, Hillbrook."
          option="VIEW ALL"
          detail="Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs."
          textHighlight={"Hillbrook."}
        />
      </div>
      <section>
        <Carousel image={[imageMain1, imageMain2, imageMain1, imageMain2]} />
      </section>
      <div className="container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3 text-white d-flex ">
              <div class="row flex-column w-100">
                  <div class="col-md-6 w-100">
                    <span className="fs-30 text-dark">
                      Our <strong className="fst-italic">  wedding packages</strong> 
                    </span>
                  </div>
                  <div class="col-md-6 w-100 mt-3">
                    <span className="text-dark">
                    Whether you envision a grand celebration or an intimate gathering, our packages are crafted to provide exceptional service and unparalleled luxury. Discover the perfect package that suits your vision and allows you to focus on what truly matters – celebrating your love.
                    </span>
                    <br></br>
                    <div className="mt-3"></div>
                    <span className="text-dark">
                      Download Brochure

                    </span>
                  </div>
              </div>
            </div>
            <div class="col-md-9 d-flex ">
              <BookingFormPrice 
                name="Intimate Wedding"
                dateTo={['may', 'now']}
                dateFrom={['dev', 'apr']}
                price={["17,000","25,000"]}
                detail="*Small events for 20-30 guests can be held inside the estate and do not require a marquee. We provide cutlery, plates and glassware for up to 30 guests."
                option="BOOK A VIEWING"
                listDetail={[
                  "Main House with 7 bedrooms",
                  "Exclusive use of the complete property",
                  "Private beach walking access",
                  "Breakfast provisions provided",
              ]}
              />
                            <BookingFormPrice 
                name="Intimate Wedding"
                dateTo={['may', 'now']}
                dateFrom={['dev', 'apr']}
                price={["17,000","25,000"]}
                detail="*Small events for 20-30 guests can be held inside the estate and do not require a marquee. We provide cutlery, plates and glassware for up to 30 guests."
                option="BOOK A VIEWING"
                listDetail={[
                  "Main House with 7 bedrooms",
                  "Exclusive use of the complete property",
                  "Private beach walking access",
                  "Breakfast provisions provided",
              ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
