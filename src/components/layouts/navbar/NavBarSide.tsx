import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { NAVBAR } from "@/constants/layout";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavBarSide() {
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
