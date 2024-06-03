import React from "react";
import Image from "next/image";
import { petrona } from "../layout";
import Footer from "../ui/landing/Footer";
import Link from "next/link";

export default function page() {
  return (
    <main className="text-bck">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="h-screen hero3 flex-col  justify-center">
          <div className="relative z-40 lg:pt-40 pt-48">
            <p className=" text-gold lg:text-[4.8rem] text-[2.5rem] leading-tight lg:lineht font-extrabold text-center pt-72">
              5-STEP GUIDE
            </p>
          </div>
        </div>
      </div>
      <div className="lg:pt-9 pt-5 bg-bck text-white">
        <div className="flex flex-col lg:flex-row gap-5 text-center lg:text-left justify-center">
          <p>1. Choose your product</p>
          <p>2. Verify your product</p>
          <p>3. Evaluate Costs</p>
          <p>4. Recognize sales pressure</p>
          <p>5. Verify your seller</p>
        </div>
        <div className="mt-24 px-3 lg:px-[25%]">
          <p>
            Buying gold can be a simple and safe process, so long as you ask the
            right questions. Ensure your gold is secure and successfully avoid
            untrustworthy sellers with these straightforward guidelines on how
            to start investing in gold.
          </p>
        </div>
        <div className="lg:mt-36 mt-10 grid lg:grid-cols-2 px-3 lg:px-[5%] pb-7 lg:pb-10">
          <div className="lg:pr-24 lg:mt-56">
            <p
              className={` text-white leading-tight font-medium text-[2.5rem] lg:text-[2.8rem] mb-5 `}
            >
              Choose the right gold product for you
            </p>
            <p>
              Different gold products offer different benefits. Are you sure you
              know which type of gold best matches your investment goals? If
              not, click below for more information on gold products.
            </p>
            <p className="text-[1.2rem] mb-7 lg:mb-7 font-semibold mt-3 lg:mt-7">See more</p>
          </div>
          <div>
            <Image
              src="/product.avif"
              width={1000}
              height={100}
              alt="product"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 px-3 lg:py-10 lg:px-[5%]">
        <div className="col-span-1 py-6 lg:py-0">
          <Image
            src="/legitimate.avif"
            width={1000}
            height={100}
            alt="product"
            className="w-full"
          />
        </div>
        <div className="lg:pl-10 lg:py-24 col-span-1 ">
          <p
            className={`${petrona.className} font-medium text-[2.5rem] hidden lg:block lg:text-[2.8rem] leading-tight mb-5`}
          >
            Confirm the product you’re buying is <br /> legitimate
          </p>
          <p
            className={`${petrona.className} font-medium text-[2.3rem] mt-3 lg:mt-0 lg:hidden lg:text-[2.8rem] leading-tight mb-5`}
          >
            Confirm the product you’re buying is  legitimate
          </p>
          <p>
            The process of buying gold is unregulated but easily navigated with
            guidance. If you need help determining whether a product is genuine,
            use the list of safe practices below.
          </p>
          <p className="text-[1.2rem] lg:mb-0 mb-8 font-semibold mt-7">See more</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:py-10 lg:px-[5%] px-3 bg-bck text-white">
        <div className="lg:pr-20 lg:py-32 col-span-1">
          <p
            className={`${petrona.className} font-medium text-[2.5rem] mt-7 lg:mt-0 lg:text-[2.8rem] leading-tight mb-5`}
          >
            Evaluate the costs & <br /> fees
          </p>
          <p>
            When you’re buying gold, understanding the associated fees is
            paramount. Are you positive that you’re aware of the total cost
            involved in your purchase? If not, reference the below list.
          </p>
          <p className="text-[1.2rem] font-semibold mt-7">See more</p>
        </div>
        <div className="col-span-1 py-6 lg:py-0">
          <Image
            src="/evaluate.avif"
            width={1000}
            height={100}
            alt="product"
            className="w-full"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 px-3 lg:py-20 lg:px-[5%]">
        <div className="col-span-1 py-6 lg:py-0">
          <Image
            src="/pressure.avif"
            width={1000}
            height={10}
            alt="product"
            className="lg:w-[85%]"
          />
        </div>
        <div className="lg:pl-10 lg:py-24 col-span-1">
          <p
            className={`${petrona.className} font-medium text-[2.5rem] lg:text-[2.8rem] leading-tight mb-5`}
          >
            Recognize sales & <br /> marketing pressure
          </p>
          <p>
            You should never feel pressured into buying gold. If you ever
            interact with a seller employing any of the below tactics, be wary
            of their intentions.
          </p>
          <p className="text-[1.2rem] font-semibold mb-7 lg:mb-0 mt-7">See more</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:py-10 lg:px-[5%] px-3 bg-bck text-white">
        <div className="lg:pr-20 lg:py-48 col-span-1">
          <p
            className={`${petrona.className} font-medium lg:text-[2.8rem] mt-7 lg:mt-0 text-[2.5rem] leading-tight mb-5`}
          >
            Verify the seller is <br /> legitimate
          </p>
          <p>
            Make sure you’re buying from a trustworthy seller and that your
            rights are secure. Do you know whether or not your vendor is
            genuine? This checklist can help.
          </p>
          <p className="text-[1.2rem] font-semibold mt-7">See more</p>
        </div>
        <div className="col-span-1 py-6 lg:py-0">
          <Image
            src="/verify.avif"
            width={1000}
            height={100}
            alt="product"
            className="w-full"
          />
        </div>
      </div>
      <div className=" lg:py-48 flex justify-center flex-col px-3 pb-10 lg:pb-0 lg:px-[10%]">
        <p
          className={`${petrona.className}  font-medium text-[2.5rem] mt-7 lg:mt-0 lg:text-[2.8rem] leading-tight mb-5`}
        >
          How the World Gold Council helps you
        </p>
        <p className="mb-5">
          The World Gold Council works with governments and industry to give
          gold sellers a set of principles.
        </p>
        <p className="mb-5">
          These voluntary principles work side-by-side with this five-step guide
          to help sellers meet your expectations. They also give you the added
          confidence that gold sellers can be held to a comprehensive set of
          standards.
        </p>

        <p className="mb-5">
          Click see more for a list of the principles and the positive behaviors
          they encourage.
        </p>
        <p className="text-[1.2rem] font-semibold mt-7">See more</p>
      </div>
      {/* <div className="bg-bck px-56 pt-44 pb-36 text-center text-white">
        <div className="px-56 pb-48">
          <p
            className={`${petrona.className}  font-medium text-[3rem] leading-tight mb-7`}
          >
            The complete guide for buying gold safely
          </p>
          <p>
            For more detailed information on gold products and finding the right
            gold seller for you, download our full guide for investing in gold.
          </p>
          <button className=" bg-gradient-to-r from-gradf to-gradt py-3 px-7 mt-9 text-lg rounded font-semibold text-black">
          <Link href="/buying">GET THE INVESTOR GUIDE</Link>  
          </button>
        </div>
        <Image
          src="/video.jpeg"
          className="w-full"
          width={1000}
          height={100}
          alt="video"
        />
        <button className=" bg-gradient-to-r from-gradf to-gradt py-3 px-7 mt-16 text-lg rounded font-semibold text-black">
         <Link href="/">LEARN MORE</Link> 
        </button>
        <div className="mt-56 text-white">
          <p className={`${petrona.className} font-medium text-[2.8rem] mb-5`}>
            Discover more
          </p>
          <div>
            <button className=" bg-gradient-to-r from-gradf to-gradt py-3 px-40 mt-10 text-lg rounded font-semibold text-black">
            <Link href="/case"> THE CASE FOR GOLD</Link> 
            </button>
          </div>

          <button className=" bg-gradient-to-r from-gradf to-gradt py-3 px-7 mt-10 text-lg rounded font-semibold text-black">
           <Link href="/">RESEARCH DEEPER WITH INSIGHTS, DATA & TOOLS</Link> 
          </button>
        </div>
      </div> */}
      <Footer/>
    </main>
  );
}
