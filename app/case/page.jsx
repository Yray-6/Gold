import React from "react";
import { petrona } from "../layout";
import Image from "next/image";
import Footer from "../ui/landing/Footer";
import Link from "next/link";

export default function page() {
  return (
    <main className="text-bck">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="h-screen hero2 flex-col  justify-center">
          <div className="relative z-40 pt-72">
            <p className=" text-gold lg:text-[5.5rem] hidden lg:block text-[2.8rem] leading-tight px-2 lg:px-0 lineht font-extrabold text-center pt-44">
              THE CASE FOR <br /> GOLD
            </p>
            <p className=" text-gold lg:text-[5.5rem] lg:hidden text-[2.8rem] leading-tight px-2 lg:px-0  font-extrabold text-center pt-60">
              THE CASE FOR GOLD
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bck lg:py-48 flex py-10 justify-center px-3 flex-col lg:px-[27rem] text-white">
        <p
          className={`${petrona.className} text-white font-medium text-[2.5rem] lg:text-[2.8rem] mb-5`}
        >
          Why investors turn to gold
        </p>
        <p className="mb-5">
          Gold presents a uniquely versatile investment proposition because of
          its dual nature as both a consumer good and an investment asset.
        </p>
        <p className="mb-5">
          This means it can deliver effective diversification in periods of
          financial turmoil while also benefitting from growth in jewelry and
          technology demand during periods of economic growth.
        </p>

        <p className="mb-5">
          Discover how investment portfolios can benefit from gold.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 lg:py-20 px-3 lg:px-56">
        <div className="col-span-1 lg:pr-20 pt-16">
          <p className="">Diversification</p>
          <p className={`${petrona.className} font-medium text-[2.5rem] leading-tight lg:text-[2.8rem] mb-5`}>
            An effective way to hedge risks like <br /> inflation
          </p>
          <p className="mb-5">
            Unlike equities, gold has historically performed well in periods of
            financial turmoil, meaning investors can use it for portfolio
            diversification and as a source of liquidity.[1]
          </p>
          <p className="mb-5">
            Because gold is a scarce resource with value that doesn’t depend on
            the creditworthiness of its holder, it has maintained its worth for
            thousands of years.[2] Gold helps investors manage the risks that
            other financial assets bring; playing a key role in creating a more
            balanced and stable portfolio.[3]
          </p>
        </div>
        <div className="col-span-1">
          <Image
            src="/inflation.png"
            width={1000}
            height={100}
            alt="chart"
            className="w-full"
          />
          <p className="text-[0.7rem] my-5 pl-4 leading-6">
            This infographic compares the returns from gold, commodities, and
            the S&P 500 index, here are the definitions of the less well-known
            terms.
          </p>
          <p className="text-[0.7rem] my-5 pl-4">
            S&P 500: The index of the top 500 companies publicly traded in the
            US — an index being a measurement of performance.
          </p>
          <p className="text-[0.7rem] my-5 pl-4">
            Commodities: Physical assets traded by investors like oil, gold, and
            foodstuffs.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 ">
        <div className="col-span-1 lg:pl-48 lg:py-72 py-20 px-3 bg-bck  lg:pr-32 text-white">
          <div>
            <p
              className={`${petrona.className} font-medium leading-tight text-[2.5rem] lg:text-[2.8rem] mb-5`}
            >
              Bubbles burst
            </p>
            <p>
              But while most assets tend to increase their correlation to
              equities in periods of high market uncertainty and often fall in
              tandem, gold’s price has generally increased in these same
              periods.[4]
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src="/bubble.avif"
            width={1000}
            height={100}
            alt="picnews"
            className="w-full"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:py-20 py-10  lg:px-56">
        <div className="col-span-1 lg:pr-20 px-3 lg:pt-16">
          <p className="">Liquidity</p>
          <p className={`${petrona.className} font-medium hidden lg:block leading-tight text-[2.5rem] lg:text-[2.8rem] mb-5`}>
            A flexible, accessible <br /> choice
          </p>
          <p className={`${petrona.className} font-medium lg:hidden leading-tight text-[2.5rem] lg:text-[2.8rem] mb-5`}>
            A flexible, accessible choice
          </p>
          <p className="mb-5">
            The perception of gold as a cumbersome, immobile asset doesn’t
            reflect the realities of today’s gold market. Gold flows freely,
            with around $163bn traded on a daily basis[5] — exceeding that of
            major financial assets.
          </p>
          <p className="mb-5">
            Because of its liquidity, gold is useful in times of both expansion
            and recession. And if investors have illiquid assets that prove
            difficult to sell, they can still use gold to meet their most
            immediate needs.
          </p>
        </div>
        <div className="col-span-1">
          <Image
            src="/flexible.avif"
            width={1000}
            height={100}
            alt="chart"
            className="w-full"
          />
          <p className="text-[0.7rem] my-5 lg:pl-4 leading-6">
            This graph compares the average daily trading volumes of various
            major financial assets, here are the definitions of the less
            well-known terms.
          </p>
          <p className="text-[0.7rem] my-5 lg:pl-4">
            S&P 500: The index of the top 500 companies publicly traded in the
            US.
          </p>
          <p className="text-[0.7rem] my-5 lg:pl-4">
            US T-Bills: A US government debt obligation backed by the Treasury
            Department.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 ">
        <div className="col-span-1">
          <Image
            src="/safely.avif"
            width={1000}
            height={1000}
            alt="picnews"
            className="w-full"
          />
        </div>
        <div className="col-span-1 lg:pl-40 lg:py-40 bg-bck px-3 py-12 lg:pr-32 text-white">
          <div>
            <p className={`${petrona.className} font-medium text-[2.5rem] leading-tight lg:text-[3rem] mb-5`}>
              The 5-step guide for buying gold safely
            </p>
            <p>Use our buyer’s guide to invest in gold with confidence.</p>
            <button className=" bg-gradient-to-r from-gradf to-gradt py-3 w-full px-5 mt-7 text-lg rounded font-semibold text-black">
            <Link
              href="/buying"
              
            >
              BUYING GOLD SAFELY
            </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:py-16 px-3 py-10 lg:px-56">
        <div className="col-span-1 lg:pr-20 pt-10">
          <p className="mb-3">Returns</p>
          <p className={`${petrona.className} font-medium text-[2.5rem] leading-tight lg:text-[2.8rem] mb-5`}>
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
          <p className="mb-7">
            Through its dual nature as a consumer good and investment, gold has
            historically preserved its value. Unlike fiat currencies, gold can’t
            be printed, only mined — this explains in good part why it has
            consistently outperformed all major fiat currencies. [4]
          </p>
        </div>
        <div className="col-span-1">
          <Image
            src="/chart.png"
            width={1000}
            height={100}
            alt="chart"
            className="w-full"
          />
          <p className="text-[0.7rem] my-5 lg:pl-4 leading-6">
            This graph compares the average returns for some of the major asset
            classes, here are the definitions of the less well-known terms.
          </p>
          <p className="text-[0.7rem] my-5 lg:pl-4">
            <span className=" font-semibold">REITs </span> - Real Estate
            Investment Trusts
          </p>
          <p className="text-[0.7rem] my-5 lg:pl-4">
            <span className="font-semibold">EM </span> - Equities Emerging
            Market Equities
          </p>
        </div>
      </div>
      <div className="bg-bck lg:px-56 lg:pb-48 pb-12 px-3 text-center">
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
        <div className="mt-48 text-white">
          <p className="mb-0">Diversification. Liquidity. Returns.</p>
          <p className={`${petrona.className} font-medium text-[2.5rem] leading-tight lg:text-[2.8rem] mb-5`}>
            Gold is your strategic advantage.
          </p>
          <div>
            <button className=" bg-gradient-to-r from-gradf to-gradt py-3 px-12 mt-10 text-lg rounded font-semibold text-black">
             <Link href="/buying">THE 5-STEP GUIDE FOR BUYING GOLD SAFELY</Link> 
            </button>
          </div>
          <button className=" bg-gradient-to-r from-gradf to-gradt py-3 px-7 mt-10 text-lg rounded font-semibold text-black">
           <Link href="/">RESEARCH DEEPER WITH INSIGHTS, DATA & TOOLS</Link> 
          </button>
        </div>
      </div>
      <div className="bg-blu lg:py-10 lg:px-[27rem] px-7 py-10 flex flex-col text-[0.9rem] gap-9">
        <p>
          [1, 3, 4, 6, 7, 9] As of 31 December 2023. See also &quot;The case for a
          strategic allocation to gold&quot; on Goldhub.
        </p>
        <p>[2] Money and Gold, gold.org</p>
        <p>
          [5] Based on estimated one-year average trading volumes as of 31
          December 2023 includes estimates on over-the-counter (OTC)
          transactions, as well as published statistics on futures exchanges and
          gold-backed exchange-traded products, for more information see trading
          volumes on goldhub.com
        </p>
        <p>
          [8] As of 31 December 2023. Metals Focus and World Gold Council. See
          demand and supply section on Goldhub.
        </p>
        <div>
          <p className="font-bold text-base mb-10">DIVERSIFICATION</p>
          <p>
            The process of investing in a varied mix of assets so that the risk
            of any one asset dropping in value has less of an impact on your
            overall portfolio.
          </p>
        </div>
        <div>
          <p className="font-bold text-base mb-10">LIQUIDITY</p>
          <p>
            Some assets, like stocks, are liquid — meaning they sell for cash
            quickly, easily, and at cost. By comparison, property is less liquid
            because it sells slowly, and may sell for less than it’s worth. Cash
            is considered the most liquid asset of all because it’s commonly
            exchanged for other assets.
          </p>
        </div>
        <div>
          <p className="font-bold text-base mb-10">ASSET</p>
          <p>
            Any resource that has economic value is an asset. Obvious examples
            include property and art, but, in investment terms, ‘assets’ include
            things like stocks, bonds, and even cash.
          </p>
        </div>
        <div>
          <p className="font-bold text-base mb-10">IMMOBILE ASSET</p>
          <p>
            As the name suggests, ‘moving’ or selling an immobile asset
            (sometimes called an illiquid asset) can be difficult. The asset may
            also lose substantial value in the process.
          </p>
        </div>
        <div>
          <p className="font-bold text-base mb-10">RETURNS</p>
          <p>
            Over time, assets go up or down in price. If you sell an asset for a
            higher price than you bought it for, you make a positive ‘return’ or
            profit. The reverse is known as a loss. Returns are calculated using
            percentages.
          </p>
        </div>
        <div>
          <p className="font-bold text-base mb-10">EQUITIES</p>
          <p>
            When you invest in a specific stock or share, you buy a small part
            of a company being traded on the stock market. Equities is another
            name for these stocks and shares.
          </p>
        </div>
        <div>
          <p className="font-bold text-base mb-10">BONDS</p>
          <p>
            When companies and governments borrow money, they issue what’s
            called a bond as a form of a receipt — and will pay interest to
            whoever holds the bond. Because they represent a specific amount of
            money, bonds can also be traded as assets.
          </p>
        </div>
        <div>
          <p className="font-bold text-base mb-10">FIAT CURRENCIES</p>
          <p>
            Fiat currencies are the money printed, minted, and used by most
            countries (the US Dollar or British Pound are examples of fiat
            money). Rather than being worth a specific amount of something
            precious, like gold, governments can keep printing fiat money.
            However, if governments print too much, this can cause inflation and
            even hyperinflation.
          </p>
        </div>
      </div>
     <Footer/>
    </main>
  );
}
