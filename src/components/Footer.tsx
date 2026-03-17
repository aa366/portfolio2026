export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`  w-full flex text-4xl justify-between text-[1.5rem] px-[5%] md:px-1 lg:p-4  border-t-2 shadow-md `}
    >
      <h3>©{currentYear} All Right Reserved ✔ Abdelwahab Anwr💝</h3>
    </footer>
  );
}
