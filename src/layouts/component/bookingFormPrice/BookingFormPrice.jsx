import React from 'react'

import './bookingFormPrice.scss';
function BookingFormPrice({...props}) {
  return (
    <div className="Booking_form">
        <div className="Booking_title">
            {props.name}
        </div>
        <div className="Booking_price">
            <div className="Booking_left">
                <span className="name">GUESTS</span>
                <span className="seats">{props.to} - {props.from}</span>
            </div>
            .
            <div className="Booking_right">
                <span className="Booking_top">
                    <span className="date">
                        <p>{props.dataTo1} - {props.dataFrom1}</p>
                        <p>PRICE (p/n)</p>
                    </span>
                    <span className="price">${props.price1}</span>
                </span>
                <span className="Booking_top">
                    <span className="date">
                        <p>{props.dataTo2} - {props.dataFrom2}</p>
                        <p>PRICE (p/n)</p>
                    </span>
                    <span className="price">${props.price2}</span>
                </span>
            </div>
        </div>
        <ul>
            {props.listDetail?.map((item, i) => {
              return(
                <li>{item}</li>
              )
            })}

        </ul>

        <div className="Booking_bottom">
            <div className="main">
                *{props.detail}
            </div>
            <span>Rates are in NZD and include taxes</span>
        </div>
    </div>
  )
}

export default BookingFormPrice