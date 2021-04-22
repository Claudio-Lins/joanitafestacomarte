import Link from "next/link";
import Image from "next/image";

//export default function Nav() {
//return (
const Navbar = () => {
  return (
    <div className="py-12">
      <nav className="bg-red-200 shadow-md z-10 py-4 fixed top-0 inset-x-0 rounded-b-xl">
        <div className="max-w-5xl px-4 mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center space-x-12 md:mx-auto">
              <div>
                <Image
                  src="/assets/lg-joanita-hor-180x68.svg"
                  alt="Algoritmo Digital"
                  width={180}
                  height={68}
                />
              </div>
              <div className="flex">
                <div className="hidden md:flex space-x-6 justify-around font-nunito font-light text-gray-800">
                  {/* Home */}
                  <div className="">
                    <Link href="/">
                      <a className="hover:text-red-700">
                        <h3>Home</h3>
                      </a>
                    </Link>
                  </div>
                  {/*  */}
                  
                  {/* Quem Somos */}
                  <div className="">
                    <Link href="/quem-somos">
                      <a className="hover:text-red-700">
                        <h3>Quem Somos</h3>
                      </a>
                    </Link>
                  </div>
                  {/*  */}
                  {/* Depoimentos */}
                  <div className="">
                    <Link href="/depoimentos">
                      <a className="hover:text-red-700">
                        <h3>Depoimentos</h3>
                      </a>
                    </Link>
                  </div>
                  {/*  */}
                
                </div>
              </div>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button id="mobile-menu-button">
                <Image src="/assets/menu-burger.svg" width={22} height={20} />
              </button>
            </div>
          </div>
          {/* Menu Mobile */}
          <div
            id="mobile-menu"
            className="hidden md:hidden flex justify-between space-x-2 text-xs mt-4 font-nunito"
          >
            <div className="">
              <Link href="/">
                <a className="hover:text-red-700">
                  <h3>Home</h3>
                </a>
              </Link>
            </div>
            {/*  */}
            
            {/* Quem Somos */}
            <div className="">
              <Link href="/quem-somos">
                <a className="hover:text-red-700">
                  <h3>Quem Somos</h3>
                </a>
              </Link>
            </div>
            {/*  */}
            {/* depoimentos */}
            <div className="">
              <Link href="/depoimentos">
                <a className="hover:text-red-700">
                  <h3>Depoimentos</h3>
                </a>
              </Link>
            </div>
            {/*  */}
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

if (typeof window !== "undefined") {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}
