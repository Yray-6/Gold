import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import React from 'react'
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";



const cards = [
  {
    text: "HOW TO OWN GOLD ONLINE",
    img: "card11.jpeg",
    text2: "Gold can be digitally bought, stored and sold",
    btn: "LEARN MORE",
  },
  {
    text: "CONFIDENCE IN GOLD",
    img: "card3.jpeg",
    text2: "Principles and guidance for trust and safety when investing in gold",
    btn: "LEARN MORE",
  },
  {
    text: "GOLD OVER THE LONG AND SHORT TERM",
    img: "card2.jpeg",
    text2: "Easily bought today, investing in gold could help you in the future",
    btn: "LEARN MORE",
  },
  {
    text: "HOW TO BUY GOLD FOR THE FIRST TIME",
    img: "card4.jpeg",
    text2: "Investing in gold can be easy and affordable",
    btn: "LEARN MORE",
  },
  {
    text: "GOLD’S ROLE IN A PORTFOLIO, AND SOCIETY",
    img: "card5.jpeg",
    text2: "Dig deeper on gold's role",
    btn: "LEARN MORE",
  },
  {
    text: "HOW GOLD IS DIFFERENT",
    img: "card11.jpeg",
    text2: "An investment in gold is one of the most unique assets you can own",
    btn: "LEARN MORE",
  },
];
 function FlipCards({card}) {
  const [isFlipped, setIsFlipped] = useState(false);
  

  return (
    <div >
      
        <div className="perspective-1000  h-[500px]">
          <motion.div
            className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className="absolute w-full  h-full backface-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="flex items-center  px-1 rounded-xl justify-center h-full bg-cover bg-no-repeat" style={{backgroundImage:`url(/${card.img})`}}>
               <p className="text-gold relative z-50 text-[1.5rem] font-bold text-center"> {card.text}</p>
              </div>
            </div>
            <div className="absolute w-full h-full backface-hidden transform rotate-y-180">
              <div className="flex-col pt-32 rounded-xl justify-center px-3 h-full bg-white">
               <p className=" text-cusblue"> {card.text}</p>
               <p className="text-[1.3rem] leading-tight font-extrabold">{card.text2}</p>
               <Link href="/buying"> <button className=" bg-gradient-to-r from-gradf to-gradt py-3 px-7 mt-20 text-base rounded font-semibold text-black">{card.btn}</button></Link>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  );
}



export default function FlipCard() {
  var settings = {
    infinite: false,
    arrows:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PreviousArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    
    <Slider {...settings}>
      {cards.map((card, index) => (
        <FlipCards key={index} card={card} />
      ))} 
    </Slider>
  
    
    
  )
}

