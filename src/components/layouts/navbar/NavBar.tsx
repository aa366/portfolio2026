import Link from "next/link";
import NavBarSettings from "./NavBarSettings";
import NavBarSide from "./NavBarSide";

interface Props {
  Name?: string;
}

export default function Navbar({ }: Props) {
  return (
    <header
      className={` sticky top-0  mx-auto rounded-b-lg z-50 transition-all duration-300 bg-accent backdrop-blur-md py-3  md:w-[80%] shadow-primary shadow`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-3xl font-extrabold bg-linear-to-r from-primary to-secondary-foreground bg-clip-text text-transparent font-serif  capitalize"
        >
          Abdelwahab
        </Link>
        <div className=" flex justify-center items-center gap-4">


          <NavBarSettings />

          <NavBarSide />
        </div>
      </div>
    </header>
  );
}
