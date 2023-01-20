import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { TbPhone } from 'react-icons/tb';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-info'>
        <ul>
          <span className="footer-title">Office Address</span>
          <li>
            <IoLocationOutline></IoLocationOutline>
            <span>Level-4, 34, Feni Centre, Dhaka</span>
          </li>
          <li>
            <MdOutlineMailOutline></MdOutlineMailOutline>
            <span>mohammadazimuddin274@gmail.com</span>
          </li>
          <li>
            <TbPhone></TbPhone>
            <span>+000-18830-61967</span>
          </li>
        </ul>
      </div>

      <div className='footer-info'>
        <ul>
          <span className="footer-title">Services</span>
          <li>Design</li>
          <li>Responsive</li>
          <li>Development</li>
          <li>Marketing</li>
        </ul>
      </div>

      <div className='footer-info'>
        <ul>
          <span className="footer-title">Company</span>
          <li><Link to={'/'} className="link link-hover">About us</Link> </li>
          <li> <Link to={'/'} className="link link-hover">Contact</Link> </li>
          <li> <Link to={'/'} className="link link-hover">Jobs</Link> </li>
          <li><Link to={'/'} className="link link-hover">Press kit</Link></li>
        </ul>
      </div>

      <div>
        <span className="footer-title">Follow Us</span>
        <div className="social-icon">
          <FaFacebookSquare className='icon'></FaFacebookSquare>
          <BsLinkedin className='icon'></BsLinkedin>
          <BsInstagram className='icon'></BsInstagram>
          <BsYoutube className='icon'></BsYoutube>
        </div>
      </div>
    </footer>
  );
};

export default Footer;