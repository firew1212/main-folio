import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        mt-24
        border-t
        border-white/10
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          md:px-6
          py-0
        "
      >
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          <div>
            <h3 className="text-xl font-bold">
              firew
              <span className="text-blue-500">.</span>
            </h3>

            <p className="text-gray-500 mt-2">
              Full Stack Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/firew1212"
              target="_blank"
              rel="noreferrer"
              className="
                text-gray-400
                hover:text-white
                transition
              "
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/firew-mulat"
              target="_blank"
              rel="noreferrer"
              className="
                text-gray-400
                hover:text-white
                transition
              "
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <div
          className="
            mt-8
            pt-8
            border-t
            border-white/10
            text-center
            text-gray-500
            text-sm
          "
        >
          © {new Date().getFullYear()} Efi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}