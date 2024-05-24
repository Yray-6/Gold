
import { useState } from "react";
import { motion } from "framer-motion";

import React from 'react'
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
    img: "hold.jpeg",
    text2: "An investment in gold is one of the most unique assets you can own",
    btn: "LEARN MORE",
  },
];
 function FlipCardss({card}) {
  const [isFlipped, setIsFlipped] = useState(false);
  

  return (
    <div >
      
        <div className="perspective-1000 h-[300px]">
          <motion.div
            className={`relative w-full transform-style-preserve-3d transition-transform duration-700 ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className="absolute w-full h-full  backface-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="flex items-center h-[300px] px-1 rounded-xl justify-center  bg-cover bg-no-repeat" style={{backgroundImage:`url(/${card.img})`}}>
               <p className="text-gold relative z-50 lg:text-[2rem] text-[1.0rem] pt-52 pb-4 font-bold text-center"> {card.text}</p>
              </div>
            </div>
            <div className="absolute w-full h-full backface-hidden transform rotate-y-180">
              <div className="flex-col rounded-xl h-[300px] py-4 justify-center px-3 bg-white">
               <p className=" text-[0.7rem] text-cusblue"> {card.text}</p>
               <p className="text-[1.0rem] leading-tight font-extrabold">{card.text2}</p>
               <button className=" bg-gradient-to-r from-gradf to-gradt py-1 px-3 mt-8 text-sm rounded text-black"><Link href="/buying">{card.btn}</Link></button>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  );
}



export default function FlipCardsm() {
  return (
    <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
            <div className="w-1/2 p-1">
                <FlipCardss key={index} card={card} />
            </div>
        
      ))} 
    </div>
      
    
  
    
    
  )
}

