import Link from "next/link";

const NavLink = ({ href, title }) => {
  // Verifique se href e title estão definidos
  if (!href || !title) {
    return null; // Ou exiba um fallback apropriado
  }

  return (
    <Link href={href}>
      <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl roudend md:p-0 hover:text-white">
        {title}
      </a>
    </Link>
  );
};

export default NavLink;
