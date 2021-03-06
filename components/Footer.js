import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={`bg-gray-900 dark:bg-deepDarkGray py-5 rounded-t-3xl `}>
      <div className="flex justify-evenly w-32 mx-auto remove-touch-effect">
        <IoLogoFacebook
          onClick={() => window.open("https://fb.com/gauravcodes", "_blank")}
          size={35}
          className="cursor-pointer text-gray-300 hover:text-gray-400 transform hover:-translate-y-1 duration-300 hover:scale-100"
        />
        <AiOutlineTwitter
          onClick={() =>
            window.open("https://twitter.com/gauravcodes", "_blank")
          }
          size={35}
          className="cursor-pointer text-gray-300 hover:text-gray-400 transform hover:-translate-y-1 duration-300 hover:scale-100"
        />
        <IoLogoInstagram
          onClick={() => window.open("https://instagram.com", "_blank")}
          size={35}
          className="cursor-pointer text-gray-300 hover:text-gray-400 transform hover:-translate-y-1 duration-300 hover:scale-100"
        />
      </div>
      <div className="text-white flex justify-evenly w-52 mx-auto mt-2 dark:text-gray-300">
        <p className="footer-link cursor-pointer text-sm hover:text-blue-400">
          Terms of Use
        </p>
        <p className="footer-link cursor-pointer text-sm hover:text-blue-400">
          Privacy Policy
        </p>
      </div>
      <p className="text-center text-gray-400 pt-2">
        Made with ❤ in India by{" "}
        <Link href="https://gauravthakur.in">
          <a
            rel="noopener"
            target="_blank"
            className="text-white dark:text-gray-200 footer-link hover:text-blue-400 "
          >
            Gaurav Thakur
          </a>
        </Link>
      </p>
    </div>
  );
};
export default Footer;
