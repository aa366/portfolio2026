import React from "react";
import Image from "next/image";

import { MoveRightIcon } from "lucide-react";
const HirMe = () => {
  const link =
      "https://api.whatsapp.com/send?phone=201149579275&text=Hello%20Abdelwahab%20!%20%0Ai%20want%20to%20discuses%20hiring%20you%20to%20know%20if%20you%20are%20suitable%20for%20the%20position%20in%20our%20company%20%20%2C%20let%27s%20talk%20in%20(link%20or%20app%20name%20)%20at%20(day%20%26%26%20hour)",
    src = "/imgs/HireMe.png";

  return (
    <a className="fixed w-22.5 aspect-square left-4 bottom-2 z-30" href={link}>
      <Image
        alt=""
        src={src}
        width={50}
        height={50}
        className={`w-full h-full animate-spining animate-slow dark:invert`}
      />
      <MoveRightIcon className="fixed text-3xl left-[calc(45px)] bottom-[calc(40px)]  animate-chaking hover:translate-x-2 active:translate-x-2 transition-transform duration-500 z-30" />
    </a>
  );
};

export default HirMe;
