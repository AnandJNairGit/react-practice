import React from "react";
import ContactCard from "./ContactCard";
import "./style.css";
import felix from "../../assets/felix.png";
import fluffy from "../../assets/fluffykins.png";
import whisker from "../../assets/mr-whiskerson.png";
import pumkin from "../../assets/pumpkin.png"
 

export default function Challenge(){
    return(
        <>
            <div className="container">
            <ContactCard 
                img={whisker}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCard 
                img={fluffy}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <ContactCard 
                img={felix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <ContactCard 
                img={pumkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />


            </div>
        </>
    );
}