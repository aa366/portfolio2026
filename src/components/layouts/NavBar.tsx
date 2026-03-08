"use client";

import Image from "next/image";
import Link from "next/link";
import { NAVBAR } from "@/constants/layout";
import { Menu, X, Settings } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface Props {
  Name?: string;
}

export default function Navbar({}: Props) {
  const { navLinks, socialLinks } = NAVBAR;

  return (
    <header
      className={` sticky top-0 rounded-b-lg z-50 transition-all duration-300 bg-red-900 backdrop-blur-md py-3  `}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-3xl font-bold bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Abdelwahab
        </Link>
        <div>
          <NavBarSettings />
          <NavBarSide />
        </div>
      </div>
    </header>
  );
}

function NavBarSide() {
  const { navLinks, socialLinks } = NAVBAR;

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="">
        <Button className="cursor-pointer">
          <Menu size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="gap-10">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <DrawerClose className="cursor-pointer">
            <X size={24} />
          </DrawerClose>
        </DrawerHeader>
        <div className="flex items-center gap-4 text-lg md:text-2xl flex-col ">
          {/* Links */}
          {navLinks.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                className=" text-gray-300 hover:text-white transition-all  relative hover:-translate-y-1 duration-200"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <nav className="flex items-center gap-5 justify-center  ">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-white transition-all hover:-translate-y-1 duration-200"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={30}
                height={30}
                className={` ${item.name === "Github" && "invert "} aspect-square object-contain `}
              />
            </a>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}

function NavBarSettings() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Settings className="size-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Settings</DialogTitle>

          <div>sdas</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
