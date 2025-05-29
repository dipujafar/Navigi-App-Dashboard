import { RiDashboardHorizontalFill, RiLogoutCircleLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import Link from "next/link";
import {
  BadgePlus,
  Menu,
  SquareMenu,
  SquareTerminal,
  Wallet,
  WalletCards,
} from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "earning",
    icon: <Wallet size={18} />,
    label: <Link href={"/earning"}>Earning</Link>,
  },
  {
    key: "customers",
    icon: <GoPeople size={18} />,
    label: <Link href={"/customers"}>Users</Link>,
  },
  {
    key: "categories",
    icon: <Menu size={18} />,
    label: "categories",
    children: [
      {
        key: "menus_list",
        icon: <SquareMenu size={18} />,
        label: <Link href={"/products"}> Products</Link>,
      },
      {
        key: "services_list",
        icon: <SquareTerminal size={18} />,
        label: <Link href={"/"}>Services</Link>,
      },
    ],
  },
  {
    key: "subscriptions",
    icon: <WalletCards size={18} />,
    label: <Link href={"/subscriptions"}>Subscriptions</Link>,
  },
  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
  //   {
  //     key: "user-request",
  //     icon: <PiListPlusFill size={20} />,
  //     label: <Link href={"/user-request"}>User Request</Link>,
  //   },
  // {
  //     key: "team-member",
  //     icon: <GoPeople size={18} />,
  //     label: <Link href={"/user"}>Team Member</Link>,
  //   },

  //   {
  //     key: "settings",
  //     icon: <IoSettingsOutline size={18} />,
  //     label: <Link href={"/settings"}>Settings</Link>,
  //   },
];
