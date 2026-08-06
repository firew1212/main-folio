"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        max-w-6xl
        mx-auto
        px-4
        md:px-6
        pt-20
      "
    >


      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-12
          items-center
          w-full
        "
      >


        {/* LEFT CONTENT */}

        <div>


          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-gray-300
              mb-6
            "
          >

            <span className="
              h-2
              w-2
              rounded-full
              bg-green-500
            " />

            Available for freelance work

          </div>



          <p className="
            text-blue-400
            font-medium
            mb-5
          ">
            <span className="text-4xl
              md:text-3xl
              font-bold
              leading-tight
               text-red-300">
              Firew mulat
            </span>   | Full Stack Software Engineer
          </p>




          <h1
            className="
              text-4xl
              md:text-3xl
              font-bold
              leading-tight
            "
          >

            Building modern

            <span className="text-blue-300">
              {" "}digital solutions
            </span>

            {" "}for real-world problems.


       </h1>

          {/* BUTTONS */}

          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-10
            "
          >


            <a
              href="#projects"
              className="
                px-7
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
              "
            >
              View Projects
            </a>



            <a
              href="#contact"
              className="
                 px-7
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
              "
            >
              Contact Me
            </a>


          </div>

          </div>





        {/* RIGHT IMAGE */}


        <div
          className="
            flex
            justify-center
          "
        >

          <div
            className="
              relative
              h-[350px]
              w-[350px]
              md:h-[450px]
              md:w-[450px]
              rounded-full
              overflow-hidden
              border
              border-white/10
              shadow-2xl
            "
          >

            <Image
  src="/profile.jpg"
  alt="firew Full Stack Software Engineer"
  fill
  priority
  sizes="(max-width: 768px) 350px, 450px"
  className="object-cover"
/>


          </div>


        </div>


      </div>


    </section>
  );
}