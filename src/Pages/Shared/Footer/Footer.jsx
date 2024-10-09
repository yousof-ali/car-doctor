import React from "react";
import logo from '../../../assets/logo.svg'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";






const Footer = () => {
  return (
    <footer className="footer bg-black text-white  p-10">
      <aside>
       <img className="w-16" src={logo} alt="" />
        <p>
          Car Doctor Ltd.
          <br />
        </p>
        <div className="flex gap-4 items-center">
          <div className="bg-gray-600 p-2  rounded-full">
          <FaGoogle />

          </div>
          <div className="bg-gray-600 p-2  rounded-full">
          <FaTwitter />

          </div>
          <div className="bg-gray-600 p-2  rounded-full">
          <FaInstagram />

          </div>
          <div className="bg-gray-600 p-2  rounded-full">
          <FaLinkedinIn />

          </div>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <a href="/" className="link link-hover">Home</a>
        <a href="/service" className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">CAccesbility</a>
      </nav>
    </footer>
  );
};

export default Footer;
