export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`  w-full flex text-4xl justify-between text-[1.5rem] px-[5%] md:px-1 lg:p-4  border-t-2 bg-accent backdrop-blur-md py-3 shadow-2xl  `}
    >
      <div className=" absolute w-full h-full -z-40 
      bg-primary backdrop-blur-lg right-0 top-0"/>
      <h3 className="w-full animate-glow text-center">©{currentYear} All Right Reserved ✔ Abdelwahab Anwr💝</h3>
    </footer>
  );
}
