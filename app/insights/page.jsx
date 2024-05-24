import React from "react";
import { petrona } from "../layout";
import Link from "next/link";
import Footer from "../ui/landing/Footer";

export default function page() {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className=" hero4 flex-col  justify-center">
          <div className="relative z-40 pt-48 pb-10">
            <p className=" text-gold text-[5.5rem] lineht font-extrabold text-center pt-28">
              INSIGHTS
            </p>
            <p className="text-gold text-[2rem] text-center pt-2">
              Deepen your understanding of gold
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bck py-20 text-center text-white">
        <p className="pb-20">
          Filled with data-backed insights, this selection of articles created
          by our experienced <br /> investment research team will help you gain
          a better understanding of gold.
        </p>
        <div className="mt-24">
          <div className="pr-52 pl-44 grid grid-cols-3  gap-7">
            <div className="col-span-1 bgold1 px-7 pt-[28rem] pb-8 rounded-xl">
              <p className="text-[2rem] font-bold leading-tight">
                Answering common questions about retail gold investment
              </p>
            </div>
            <div className="col-span-1 bgold2 px-7 pt-[28rem] pb-8 rounded-xl">
              <p className="text-[2rem] font-bold leading-tight">
                The case for gold: Protect and build your wealth A
              </p>
            </div>
            <div className="col-span-1 bgold3 px-7 pt-[28rem] pb-8 rounded-xl">
              <p className="text-[2rem] font-bold leading-tight">
                Why gold is a very different investment than cryptocurrencies
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-[27rem] pt-56 pb-48">
            <p
              className={`${petrona.className}  font-medium text-[2.8rem] leading-tight mb-7`}
            >
              Explore the home of gold research
            </p>
            <p>
              Whether you’re interested in deepening your understanding of gold
              — or sharing what you’ve learned with your financial advisor — get
              the latest data and insights on gold at Goldhub.
            </p>
            <button className=" bg-gradient-to-r from-gradf to-gradt py-3 px-7 mt-9 text-lg rounded font-semibold text-black">
              VISIT GOLDHUB
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 py-48 pr-10 pl-56">
          <p className={`${petrona.className} font-medium leading-tight text-[2.8rem] mb-5`}>
            Consider gold’s potential benefits
          </p>
          <p className=" font-extralight">
            Gold is used in everything from electronics to jewellery, but you
            can also invest in it. This unique double demand could make gold
            your advantage in times of economic turmoil, and growth. Find out
            how.
          </p>
          <p className="mt-11">
            <Link
              href="/case"
              className="bg-bck text-white py-4 px-9 font-semibold rounded "
            >
              THE CASE FOR GOLD
            </Link>
          </p>
        </div>
        <div className="col-span-1 py-48 pr-48 pl-16 bg-blu">
          <p className={`${petrona.className} font-medium leading-tight text-[2.8rem] mb-5`}>
            Get the guide for investing in gold
          </p>
          <p className=" font-extralight">
            Investing in gold can be simple and safe — provided you ask the
            right questions. Find out more with our 5-step guide to buying gold
            safely.
          </p>
          <p className="mt-11">
            <Link
              href="/buying"
              className="bg-bck text-white py-4 px-9 font-semibold rounded "
            >
              BUYING GOLD SAFELY
            </Link>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
