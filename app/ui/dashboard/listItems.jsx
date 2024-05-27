import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCardIcon from "@mui/icons-material/AddCard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import DiamondIcon from "@mui/icons-material/Diamond";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function MainListItems() {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <Link
        href="/dashboard"
      >
        <ListItemButton
          className={clsx("text-gold", {
            "bg-black hover:bg-gray-900": pathname === "/dashboard",
          })}
        >
          <ListItemIcon>
            <DashboardIcon className="text-gold" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link href="/dashboard/deposit">
        <ListItemButton  className={clsx("text-gold", {
            "bg-black hover:bg-gray-900": pathname === "/dashboard/deposit",
          })}>
          <ListItemIcon>
            <AddCardIcon className="text-gold"/>
          </ListItemIcon >
          <ListItemText primary="Deposit" />
        </ListItemButton>
      </Link>

      <Link href="/dashboard/withdraw">
        <ListItemButton className={clsx("text-gold", {
            "bg-black hover:bg-gray-900": pathname === "/dashboard/withdraw",
          })}>
          <ListItemIcon>
            <AttachMoneyIcon className="text-gold"/>
          </ListItemIcon>
          <ListItemText primary="Withdraw" />
        </ListItemButton>
      </Link>
      <Link href="/dashboard/buy">
        <ListItemButton className={clsx("text-gold", {
            "bg-black hover:bg-gray-900": pathname === "/dashboard/buy",
          })}>
          <ListItemIcon>
            <DiamondIcon className="text-gold"/>
          </ListItemIcon>
          <ListItemText primary="Buy" />
        </ListItemButton>
      </Link>
      <Link href="/dashboard/sell">
        <ListItemButton className={clsx("text-gold", {
            "bg-black hover:bg-gray-900": pathname === "/dashboard/sell",
          })}>
          <ListItemIcon >
            <SwapHorizIcon className="text-gold"/>
          </ListItemIcon>
          <ListItemText primary="Sell" />
        </ListItemButton>
      </Link>
      <ListSubheader component="div" inset></ListSubheader>
      <Link href="/dashboard/shop">
        <ListItemButton className={clsx("text-gold", {
            "bg-black hover:bg-gray-900": pathname === "/dashboard/shop",
          })}>
          <ListItemIcon>
            <ShoppingCartIcon className="text-gold" />
          </ListItemIcon>
          <ListItemText primary="shop" />
        </ListItemButton>
      </Link>
      <Link href="/dashboard/transactions">
        <ListItemButton className={clsx("text-gold", {
            "bg-black hover:bg-gray-900": pathname === "/dashboard/transactions",
          })}>
          <ListItemIcon>
            <BarChartIcon className="text-gold"/>
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItemButton>
      </Link>
      <ListItemButton className="text-gold">
        <ListItemIcon>
          <PeopleIcon className="text-gold"/>
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );
}
