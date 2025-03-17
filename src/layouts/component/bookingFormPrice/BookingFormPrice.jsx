import React, { Fragment } from "react";

import "./bookingFormPrice.scss";
function BookingFormPrice({ ...props }) {
  const { name, guest, to, from, dateTo, dateFrom, price, detail, option, listDetail} = props;
  return (
    <div className="Booking_form">
      <div className="Booking_title">{name}</div>
      <div className="Booking_price">
        {guest ? (
          <Fragment>
            <div className="Booking_left">
              <span className="name">GUESTS</span>
              <span className="seats">
                {to} - {from}
              </span>
            </div>

            <div className="Booking_right">
                {dateTo.map((item, id) => {
                    
                    return(
                        <span key={id} className="Booking_top">
                            <span className="date">
                            <p>
                                {item} - {dateFrom[id]}
                            </p>
                            <p>PRICE (p/n)</p>
                            </span>
                            <span className="price">${price[id]}</span>
                        </span>

                    )
                })}
            </div>
          </Fragment>
        ) : (
          <div className="w-100 h-100 d-flex formDate">
                {dateTo.map((item, id) => {
                    
                    return(
                        <span key={id} className="Booking_left">
                            <span className="date">
                            <p>
                                {item} - {dateFrom[id]}
                            </p>
                            </span>
                            <span className="price">${price[id]}</span>
                        </span>

                    )
                })}
          </div>
        )}
      </div>
      <ul>
        {listDetail?.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>

      <div className="Booking_bottom">
        <div className="main">*{detail}</div>
        {option ? (
            <div className="Booking_bottom_option">{option}</div> 
        ): (
            <span> Rates are in NZD and include taxes </span>
        )}
      </div>
    </div>
  );
}

export default BookingFormPrice;
