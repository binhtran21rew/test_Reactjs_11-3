import React from 'react'


import './policy.scss';
import { imageMain3 } from '../../constant';
import FormContent from '../../layouts/component/formContent/FormContent';
import ImageSlide from '../../layouts/component/imageSlide/ImageSlide';
function Policy() {
  return (
    <div className="Policy">
    <div className="container">
        <FormContent
            title="Privacy Policy"
            listName={[
                "Privacy Statement",
            ]}
            listDetail={[
                [
                    "We collect personal information from you, such as your name, contact information, and billing or purchase details, for the specific purposes of securely processing and confirming reservations. Contact information is essential for communicating important details about the property, arrival and departure instructions, and guest arrangements.",
                    "You have the right to request a copy of the personal information we have stored about you and to request corrections if necessary. If you wish to exercise these rights, please contact us at: stay@hillbrookestate.co.nz",
                ],
            ]}
        />

    </div>
        <ImageSlide
            image={imageMain3}
            text="Relax or explore your very own personal playground"
            textHightlight="personal playground"
        />
</div>
  )
}

export default Policy