import React from "react";

export default function Bodydiv(props) {
  const body=[{
    heading :"Enjoy on your TV.",
    para :"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    image :"../images/one.PNG"
  },
  {
    heading :"Download your shows to watch offline.",
    para :"Save your favourites easily and always have something to watch.",
    image : "../images/two.PNG"
  } ,
  {
    heading :"Watch everywhere.",
    para :"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    image :"../images/three.PNG"
  },
  {
    heading :"Create profiles for children.",
    para :"Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    image :"../images/four.PNG"
  }]
  return (
    <div>
      {body.map((item,i) => (
        <div id="bodydiv" key={i}>
          <div id="textdiv" >
            <h1>{item.heading}</h1>
            <h5>{item.para}</h5>
          </div>
          <div>
            <img id="img" src={item.image} alt="Preview"></img>
          </div>
        </div>
      ))}
    </div>
  );
}