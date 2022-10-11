import React from "react";
import phone from "../../assets/phone-icon.png";
import email from "../../assets/mail-icon.png";

export default function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone}/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={email} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}