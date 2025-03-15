import React from 'react'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesome } from "../../../component/FontAwesome";

import './boxContent.scss';
function BoxContent({...props}) {
    const {text, textPosition, detail, option, textHighlight} = props;
    
  return (
    <div className="BoxContent">
    {/* {text.map((data, id) => {
        return(
            <span style={{margin: textPosition * (id + 1)}}>{data}</span>
        )
    })} */}
    {
        text.map((part, id) => {
            console.log(textHighlight.split(" ").includes(part), text)

            return textHighlight.split(" ").includes(part) ? (
                
                <span
                    key={id}
                    style={{
                        fontWeight: "bold",
                        fontStyle: "italic",
                        margin:  (textPosition * (id + 1)),
                        height: "auto",
                    }}
                >
                    {part}
                </span>
            ) : (
                <span style={{ marginRight: 10 }}>
                    {part}
                </span>
            );
        })
    }
    <span         style={{ marginLeft: "50%" }}
        className="fs-6 mt-3 lh-2"> 
        {detail}
        <FontAwesome
            icon={faArrowRight}
            size={"1x"}
            color="#D4A373"
        /> {option}
        </span>













    {/* <span style={{ marginLeft: props.position, fontSize: 80 }}>
        Your <h2 className="ms-3 " style={{fontSize: 80}}>luxury escape</h2>
    </span>
    <span style={{ marginLeft: "33.3333%", fontSize: 80 }}>
        to disconnect
    </span>
    <span style={{ marginLeft: "50%", fontSize: 80 }}>and reconnect</span> */}
    {/* <span
        style={{ marginLeft: "50%" }}
        className="fs-6 mt-3 lh-2"
    >
        Hillbrook Estate & Farm is a luxury coastal property and
        working farm situated just north of Whangamata on New
        Zealand's Coromandel coast. Available for exclusive
        rental, our estate is the perfect setting for your next
        luxury escape.
        <a href="" className="mt-3 text-dark">
            BOOK NOW
        </a>
    </span> */}
</div>
  )
}

export default BoxContent