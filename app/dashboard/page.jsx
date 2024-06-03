"use client";

import { useEffect, useState } from "react";
import Money from "../ui/dashboard/Money";
import TradingView from "../ui/dashboard/TradingView";
import Orders from "../ui/dashboard/Orders";
import Orders2 from "../ui/dashboard/Table";
import DukascopyWidget from "../ui/dashboard/News";

export default function Page() {
  
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const fetchWalletData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        // Handle when token is not available
        console.error("Token not available");
        return;
      }

      try {
        const walletResponse = await fetch(
          "https://goldback.onrender.com/wallet",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const walletResult = await walletResponse.json();
        if (walletResponse.ok) {
          setWallet(walletResult.data);
        } else {
          console.error("Failed to fetch wallet data");
        }
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      }
    };

    fetchWalletData();
    
  }
  , []);

  return (
    <div className='overflow-x-hidden'>
      {wallet && <Money wallet={wallet} />}
      <div className="grid lg:grid-cols-2 gap-7 overflow-y-hidden">
        <div className="lg:col-span-1 overflow-y-hidden">
          <TradingView />
        </div>
        <div className="lg:col-span-1">
          <div className="hidden lg:block"> <Orders/></div>
         <div className="lg:hidden"><Orders2/></div>
        </div>

      </div>
      <div>
        <DukascopyWidget/>
      </div>
    </div>
  );
}
