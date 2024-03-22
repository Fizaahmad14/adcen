"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Login from "@/app/components/login/Login";
import WishList from "@/app/components/wishlist/WishList";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const menuItems = [
    {
      title: "Universities",
      href: "/explore",
    },
    {
      title: "Cost Estimation",
      href: "/cost-estimation",
    },
    {
      title: "Trends",
      href: "/trends",
    },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: ["fixed", "bg-gray-500/50"],
        wrapper: ["max-w-screen-2xl"],
        item: [
          "data-[active=true]:underline",
          "data-[active=true]:decoration-2",
          "data-[active=true]:decoration-green-400",
          "data-[active=true]:underline-offset-2",
          "data-[active=true]:hover:text-white",
          "text-white",
          "hover:text-green-300",
          "transition-all",
        ],
        menu: ["0/50"],
        menuItem: [
          "data-[active=true]:underline",
          "data-[active=true]:decoration-2",
          "data-[active=true]:decoration-green-400",
          "data-[active=true]:underline-offset-2",
          "data-[active=true]:hover:text-white",
          "text-white",
          "hover:text-green-300",
          "transition-all",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-gray-50"
        />
        <NavbarBrand>
          <Link
            href="/"
            onClick={() => {
              setActiveLink("/");
              isMenuOpen ? setIsMenuOpen(!isMenuOpen) : "";
            }}
          >
            <Image
              width={130}
              height={130}
              alt="Adcen Logo"
              src={logo}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            isActive={item.href === pathname}
            key={item.title}
          >
            <Link
              className="w-full text-base"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
          <WishList />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            isActive={item.href === pathname}
            onClick={() => {
              // setActiveLink(item.href);
              setIsMenuOpen(!isMenuOpen);
            }}
            key={item.title}
          >
            <Link className="w-full" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
