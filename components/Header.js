import Link from "next/link";
import { memo } from "react";

const Header = () => {
  return (
    <header className="w-full h-[70px] bg-teal-700 text-white flex justify-between items-end px-4">
      <div className="pb-1 text-3xl font-semibold">Brand</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <a className="block px-5 pt-3 pb-1 hover:bg-teal-600">
                Person
              </a>
            </Link>
          </li>
          <li>
            <Link href="/potions">
              <a className="block px-5 pt-3 pb-1 hover:bg-teal-600">
                Potions
              </a>
            </Link>
          </li>
          <li>
            <Link href="/spells">
              <a className="block px-5 pt-3 pb-1 hover:bg-teal-600">
                Spells
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
