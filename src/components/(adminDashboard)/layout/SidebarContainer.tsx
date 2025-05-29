"use client";
import { Button, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
// import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/image/logo.png";
import faviconLogo from "@/assets/image/faviconLogo.png";
import { navLinks } from "@/utils/navLinks";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoLogInOutline } from "react-icons/io5";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SidebarContainer = ({ collapsed }: { collapsed: boolean }) => {
  const [current, setCurrent] = useState("dashboard");
  const currentPath = usePathname();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    if (e.key === "logout") {
      localStorage.removeItem("activeNav");
      return;
    }
    localStorage.setItem("activeNav", e.key);
  };

  useEffect(() => {
    const activeKey = localStorage.getItem("activeNav");
    if (!activeKey) return;
    if (activeKey && currentPath !== "/dashboard") {
      setCurrent(activeKey as string);
    } else {
      setCurrent("dashboard");
    }
  }, []);

  return (
    <Sider
      width={220}
      theme="light"
      collapsible
      collapsed={collapsed}
      trigger={null}
      style={{
        paddingInline: `${collapsed ? "10px" : "15px"}`,
        backgroundColor: "var(--color-secondary)",
        maxHeight: "100vh",
        overflowY: "auto",
        minHeight: "100vh",
      }}
    >
      {/* logo  */}
      <div className="py-8 text-black">
        
        <h4>ByeWind</h4>
      </div>

      {
        <h1 className={cn("text-[#00000066] mb-4", collapsed ? "5px text-[10px]" : "3px ")}>
          Dashboards
        </h1>
      }
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["dashboard"]}
        selectedKeys={[current]}
        mode="inline"
        className="sidebar-menu text-lg bg-main-color !mt-1"
        items={navLinks}
      />
      <div className="absolute  w-[90%]  bottom-1 flex justify-center items-center px-2">
        <div className="py-2 flex flex-col justify-center items-center gap-y-5 ">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo_Image"
              className={cn(`lg:px-3 `, collapsed && "hidden")}
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={faviconLogo}
              alt="logo_Image"
              className={cn(`lg:px-1`, !collapsed && "hidden")}
            />
          </Link>
        </div>
        
      </div>
    </Sider>
  );
};

export default SidebarContainer;
