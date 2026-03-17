"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// icons
import Github from "@/../public/icons/github.png";
import { ExternalLink, Video } from "lucide-react";

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Project = ({ name, image, category, techstack, links }: project) => {
  const [active, setActive] = useState<boolean>(category == "366");

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col gap-2 bg-white dark:bg-gray-800 rounded-lg p-4"
    >
      <div
        className="relative group rounded-lg bg-violet-50"
        onClick={() => setActive(!active)}
      >
        <Image
          alt={name}
          width={1000}
          height={1000}
          className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
          src={image}
        />

        {(links.visit.trim() || links.code.trim() || links.video.trim()) && (
          <div
            className={`absolute top-0 scale-x-0 ${
              active && "scale-100"
            } group-hover:scale-100 ${
              active && "scale-x-100"
            } transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center`}
            onClick={() => setActive(!active)}
          >
            {links.visit.trim() && (
              <Link
                href={links.visit}
                target="_blank"
                className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
              >
                <ExternalLink size={20} />
              </Link>
            )}
            {links.code.trim() && (
              <Link
                href={links.code}
                target="_blank"
                className=" p-2 rounded-lg hover:bg-background/90  transition-all"
              >
                <Image
                  src={Github}
                  alt="Github"
                  width={30}
                  height={30}
                  className="aspect-square object-cover"
                />
              </Link>
            )}
            {links.video.trim() && (
              <Link
                href={links.video}
                target="_blank"
                className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
              >
                <Video size={20} />
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="my-2 flex flex-col gap-3">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-sm text-gray-400">
          {" "}
          <span className="font-medium">Tech Stack:</span> {techstack}
        </p>
      </div>
    </motion.div>
  );
};

export default Project;
