import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="fixed z-98 flex md:hidden items-center w-full rounded-b-2xl bg-white shadow-2xl/10">
      <Link className="nav-logo block text-xl text-neutral-dark hover:text-primary-hover px-5 py-4" to="./">LOGO</Link>
      <Link className="nav-toggle button button-icon button-ghost button-content hover:text-primary-hover hover:bg-neutral-lighter" to="#navToggle"><span className="icon-material">menu</span></Link>
    </header>
  );
};