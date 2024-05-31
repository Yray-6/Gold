"use client";
import Image from "next/image";
import YouTubeEmbed from "./ui/landing/YouTube";
import Carousel from "./ui/landing/Carousel";
import FlipCard from "./ui/landing/FlipCard";
import Link from "next/link";
import { petrona } from "./layout";
import Footer from "./ui/landing/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import FlipCardsm from "./ui/landing/flipCardsm";



export default function Home() {
  return (
    <main className="text-bck">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="h-screen hero  flex-col  justify-center">
          <div className="relative z-40 lg:pt-28 pt-56">
            <p className=" text-gold lg:text-[4.5rem] text-[2.8rem] px-5 lg:px-0 leading-tight font-bold text-center pt-[10%]">
              INVEST IN <br /> TOMORROW, <br /> TODAY
            </p>
            <p className="text-gold lg:text-[1.5rem] text-[1.5rem] text-center pt-5 px-5 lg:px-0">
              Explore the potential benefits and ease of investing in gold
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-center lg:py-20 py-7 px-3 lg:text-base text-sm">
        <p>
          Gold. It’s famous for being a ‘safe haven’ investment thanks to years
          of strong <br /> performance in both good and bad economic times.
        </p>
        <p className="lg:mt-5 mt-3 font-bold">
          Discover how investing in gold today could help protect you against
          tomorrow’s <br /> surprises.
        </p>
      </div>
      <div>
        <div className="lg:h-screen overflow-hidden">
          <Image
            src="/video.jpeg"
            className="w-full"
            width={1000}
            height={100}
            alt="video"
          />
        </div>
       
      </div>
      <div className=" bg-bgss lg:py-20 px-3 py-7 lg:pl-44">
        <p className={`${petrona.className} text-white font-medium text-[2.8rem] leading-tight  mb-5`}>
          Discover more of gold’s potential benefits
        </p>
        <p className="text-[1.6rem] lg:mb-32 text-cusblue">
          Learn about gold&apos;s qualities
        </p>
        <div className="mt-3 hidden lg:block">
          <FlipCard />
        </div>
        <div className="mt-3 lg:hidden">
          <FlipCardsm/>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:py-16 px-3 py-7 lg:px-[5%]">
        <div className="col-span-1 lg:pr-20">
          <p className="mb-3">Returns</p>
          <p className={`${petrona.className} font-medium text-[2.5rem] lg:text-[2.8rem] leading-tight mb-5`}>
            A proven asset with competitive returns
          </p>
          <p className="mb-5">
            Since 1971, gold’s return has been similar to equities and
            outperformed bonds. [1]
          </p>
          <p className="mb-5">
            In the last 20 years, gold outperformed most major asset classes ({" "}
            <span className="font-semibold">see chart</span>). [2]
          </p>
          <p className="mb-5">
            In the last 20 years, gold’s global investment demand increased by
            an average of 10% per year. [3]
          </p>
          <p className="mb-7">
            Through its dual nature as a consumer good and investment, gold has
            historically preserved its value. Unlike fiat currencies, gold can’t
            be printed, only mined — this explains in good part why it has
            consistently outperformed all major fiat currencies. [4]
          </p>
          <p className="text-[1.2rem] font-semibold">See more <FontAwesomeIcon icon={'angle-down'} className='text-[10px]'/></p>
        </div>
        <div className="col-span-1">
          <Image
            src="/chart.png"
            width={1000}
            height={100}
            alt="chart"
            className="w-full"
          />
          <p className="text-[0.7rem] my-5 pl-4 leading-6">
            This graph compares the average returns for some of the major asset
            classes, here are the definitions of the less well-known terms.
          </p>
          <p className="text-[0.7rem] my-5 pl-4">
            <span className=" font-semibold">REITs </span> - Real Estate
            Investment Trusts
          </p>
          <p className="text-[0.7rem] my-5 pl-4">
            <span className="font-semibold">EM </span> - Equities Emerging
            Market Equities
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 px-4">
        <div className="col-span-1 lg:py-48 leading-tight mt-11 lg:mt-0 lg:pr-10 lg:pl-[5%]">
          <p className={`${petrona.className} font-medium text-[2.5rem] lg:text-[2.8rem] mb-5`}>
            Consider gold’s potential benefits
          </p>
          <p className="lg:mb-10">
            Gold is used in everything from electronics to jewellery, but you
            can also invest in it. The unique nature of gold could help in times
            of economic turmoil, and growth. Find out how.
          </p>
          <p className="lg:mt-11 mt-10 lg:inline text-center py-4 px-9 rounded  bg-bck">
            <Link
              href="/case"
              className=" text-white   font-semibold  "
            >
             THE CASE FOR GOLD
            </Link>
          </p>
        </div>
        <div className="col-span-1 lg:py-48 lg:pr-[10%] lg:pl-16 mt-7 lg:mt-0 lg:bg-blu">
          <p className={`${petrona.className} font-medium text-[2.5rem] hidden lg:block lg:text-[2.8rem] leading-tight mb-5`}>
            Get the guide for <br /> investing in gold
          </p>
          <p className={`${petrona.className} font-medium  lg:hidden text-[2.5rem] lg:text-[2.8rem] leading-tight mb-5`}>
            Get the guide for  investing in gold
          </p>
          <p className="lg:mb-10">
            Investing in gold can be simple and safe — provided you ask the
            right questions. Find out more with our 5-step guide to buying gold
            safely.
          </p>
          <p className="lg:mt-11 mt-10 lg:inline text-center py-4 px-9 rounded  bg-bck">
            <Link
              href="/buying"
              className="text-white font-semibold rounded "
            >
              BUYING GOLD SAFELY
            </Link>
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mt-10 lg:mt-0 px-4 lg:px-[5%] lg:py-20  text-white bg-bck">
        <div className="col-span-1 pt-7 lg:pr-16">
          <p className={`${petrona.className} font-medium leading-tight lg:text-[2.8rem] text-[2.5rem] mb-5`}>
            A proven protector in times of turmoil
          </p>
          <p className="mb-5">
            History shows that people flock to gold in uncertain times because
            of its unique combination of qualities.
          </p>
          <p className="mb-5">
            If you&apos;re looking for more secure options for storing your wealth,
            gold offers the potential for competitive returns over time.
          </p>
          <p className="mb-5">
            Sold worldwide, should the economy change rapidly in the future, you
            could counter unforeseen costs by selling your gold to a ready,
            global market.
          </p>
          <p className="mb-5">Invest in tomorrow, today, with gold.</p>
        </div>
        <div className="col-span-1 lg:pl-16">
          <Image
            src="/eat1.avif"
            width={1000}
            height={800}
            alt="men"
            className="self-center"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 px-4 lg:px-0 mt-10 lg:mt-0">
        <div className="col-span-1 lg:py-48 lg:pr-10 lg:pl-[5%]">
          <p>Get weekly insights on gold’s performance </p>
          <p className={`${petrona.className} font-medium text-[2.5rem] lg:text-[2.8rem] mb-5`}>
          Stay up to date
          </p>
          <p className="lg:mb-12">
          When it comes to meeting the challenges of today’s fast-changing economy, gold’s unique characteristics make it a highly relevant asset. Follow gold’s performance with weekly updates delivered directly to your inbox.
          </p>
          <p className="lg:mt-20 mt-11 lg:inline text-center py-4 px-9 rounded  bg-bck">
            <Link
              href="/buying"
              className="text-white font-semibold "
            >
              SIGN UP ON GOLD.ORG
            </Link>
          </p>
        </div>
        <div className="col-span-1 lg:py-48 mt-16 lg:mt-0 lg:pr-[5%] lg:pl-16 lg:bg-blu">
          <p>Get the latest insights from the World Gold Council</p>
          <p className={`${petrona.className} font-medium text-[2.5rem] leading-tight lg:text-[2.8rem] mb-5`}>
          Explore the home of gold research
          </p>
          <p className="lg:mb-10">
            Investing in gold can be simple and safe — provided you ask the
            right questions. Find out more with our 5-step guide to buying gold
            safely.
          </p>
          <p className="lg:mt-12 mt-10 lg:inline text-center py-4 px-9 rounded  bg-bck">
            <Link
              href="/buying"
              className= "text-white font-semibold "
            >
              GOLDHUB
            </Link>
          </p>
        </div>
      </div>
     <Footer/>
    </main>
  );
}
