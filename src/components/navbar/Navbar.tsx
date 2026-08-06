"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Code2, UserRound, Menu, X } from "lucide-react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScroll(currentScroll);
    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [lastScroll]);



  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-transform
        duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >

      <nav
        className="
          max-w-6xl
          mx-auto
          mt-4
          px-6
          py-4
          rounded-2xl
          border
          border-white/10
          bg-black/30
          backdrop-blur-xl
          flex
          items-center
          justify-between
        "
      >


        {/* Logo */}

       <div className="flex items-center gap-3">

  <Image
    src="/logo.svg"
    alt="Efi Logo"
    width={38}
    height={38}
    className="rounded-lg"
  />

  <h1 className="text-xl font-bold tracking-wide">
    firew
    <span className="text-blue-500">.</span>
  </h1>

</div>



        {/* Desktop Menu */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-gray-300
          "
        >

          <a 
            href="#about"
            className="hover:text-blue-400 transition"
          >
            About
          </a>


          <a 
            href="#skills"
            className="hover:text-blue-400 transition"
          >
            Skills
          </a>


          <a 
            href="#projects"
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>


          <a 
            href="#contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>


        </div>




        {/* Desktop Icons */}

        <div className="hidden md:flex items-center gap-4">

          <Code2
            className="
              text-gray-400
              hover:text-white
              cursor-pointer
              transition
            "
            size={20}
          />


          <UserRound
            className="
              text-gray-400
              hover:text-white
              cursor-pointer
              transition
            "
            size={20}
          />

        </div>




        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >

          {
            openMenu
            ?
            <X size={26}/>
            :
            <Menu size={26}/>
          }

        </button>


      </nav>




      {/* Mobile Menu */}

      {
        openMenu && (

          <div
            className="
              md:hidden
              mx-6
              mt-2
              rounded-2xl
              border
              border-white/10
              bg-black/80
              backdrop-blur-xl
              p-6
            "
          >

            <div className="
              flex
              flex-col
              gap-5
              text-gray-300
            ">


              <a 
                href="#about"
                onClick={() => setOpenMenu(false)}
              >
                About
              </a>


              <a 
                href="#skills"
                onClick={() => setOpenMenu(false)}
              >
                Skills
              </a>


              <a 
                href="#projects"
                onClick={() => setOpenMenu(false)}
              >
                Projects
              </a>


              <a 
                href="#contact"
                onClick={() => setOpenMenu(false)}
              >
                Contact
              </a>


            </div>

          </div>

        )
      }


    </header>
  );
}