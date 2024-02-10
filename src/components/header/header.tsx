import Link from "next/link";
import cl from "./header.module.scss";

const Header = () => {
  return (
    <div className={cl.header}>
      <div className={cl.name}>Anton Turbovskyi</div>
      <div className={cl.links}>
        <Link href={"/#about"} className={cl.hoverUnderlineAnimation}>
          About
        </Link>
        <Link href={"/#projects"}>Projects</Link>
        <Link href={"/#contact"}>Contacts</Link>
        <Link href={"/resume.pdf"} target="_blank">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
