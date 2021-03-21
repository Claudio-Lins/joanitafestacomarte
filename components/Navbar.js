import Link from "next/link";
import Image from "next/image";

//export default function Nav() {
//return (
const Navbar = () => {
  return (
    <div className="py-16">
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
                <div className="hidden md:flex space-x-6 justify-around font-nunito font-medium">
                  {/* Home */}
                  <div className="">
                    <Link href="/">
                      <a className="hover:text-red-700">
                        <h3>Home</h3>
                      </a>
                    </Link>
                  </div>
                  {/*  */}
                  {/* Galeria */}
                  <div className="">
                    <Link href="/galeria">
                      <a className="hover:text-red-700">
                        <h3>Galeria</h3>
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
                  {/* Temas */}
                  <div className="">
                    <Link href="#">
                      <a className="hover:text-red-700">
                        <h3>Temas</h3>
                      </a>
                    </Link>
                  </div>
                  {/*  */}
                  {/* Loja */}
                  <div className="">
                    <Link href="#">
                      <a className="hover:text-red-700">
                        <h3>Loja</h3>
                      </a>
                    </Link>
                  </div>
                  {/*  */}

                  {/* Contact */}
                  <div className="">
                    <Link href="#">
                      <a className="hover:text-red-700">
                        <h3>Contacto</h3>
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
            className="hidden md:hidden flex justify-center space-x-4 text-xs mt-4 font-nunito font-medium"
          >
            <div className="">
              <Link href="/">
                <a className="hover:text-red-700">
                  <h3>Home</h3>
                </a>
              </Link>
            </div>
            {/*  */}
            {/* Galeria */}
            <div className="">
              <Link href="/galeria">
                <a className="hover:text-red-700">
                  <h3>Galeria</h3>
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
            {/* Temas */}
            <div className="">
              <Link href="#">
                <a className="hover:text-red-700">
                  <h3>Temas</h3>
                </a>
              </Link>
            </div>
            {/*  */}
            {/* Loja */}
            <div className="">
              <Link href="#">
                <a className="hover:text-red-700">
                  <h3>Loja</h3>
                </a>
              </Link>
            </div>
            {/*  */}

            {/* Contact */}
            <div className="">
              <Link href="#">
                <a className="hover:text-red-700">
                  <h3>Contacto</h3>
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

// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav className="bg-red-200 py-4">
//       <div className="container mx-auto px-8">
//         <div className="flex items-center">
//           <div className="">
//             <Image
//               src="/assets/lg-joanita-hor-180x68.svg"
//               width={180}
//               height={68}
//             />
//           </div>
//           <div className=" hidden md:flex mx-auto py-4">
//             <div className=" flex space-x-12 font-nunito font-medium">
//               <div className="px-3 py-2">
//                 <Link href="/">
//                   <a>Home</a>
//                 </Link>
//               </div>
//               <div className="px-3 py-2">
//                 <Link href="/galeria">
//                   <a>Galeria</a>
//                 </Link>
//               </div>
//               <div className="px-3 py-2">
//                 <Link href="/quem-somos">
//                   <a>Quem Somos</a>
//                 </Link>
//               </div>
//               <div className="px-3 py-2">
//                 <Link href="/">
//                   <a>Contacto</a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* Mobile */}
//           <div className="md:hidden flex items-center">
//             <button className="mobile-menu-btn">
//               <Image src="/assets/menu-burger.svg" width={22} height={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="mobile-menu hidden">
//         <div className="flex space-x-12 font-nunito font-medium">
//           <div className="px-3 py-2">
//             <Link href="/">
//               <a>Home</a>
//             </Link>
//           </div>
//           <div className="px-3 py-2">
//             <Link href="/galeria">
//               <a>Galeria</a>
//             </Link>
//           </div>
//           <div className="px-3 py-2">
//             <Link href="/quem-somos">
//               <a>Quem Somos</a>
//             </Link>
//           </div>
//           <div className="px-3 py-2">
//             <Link href="/">
//               <a>Contacto</a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
