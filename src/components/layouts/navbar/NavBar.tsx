import Link from "next/link";
import NavBarSettings from "./NavBarSettings";
import NavBarSide from "./NavBarSide";

interface Props {
  Name?: string;
}

export default function Navbar({}: Props) {
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
