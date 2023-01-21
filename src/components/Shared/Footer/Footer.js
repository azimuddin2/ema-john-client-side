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
    <footer className='footer-container'>
      <div className="footer">
        <div className='footer-info'>
          <span className="footer-title">Office Address</span>
          <ul>
            <li className='office-address'>
              <IoLocationOutline className='address-icon'></IoLocationOutline>
              <span>Level-4, 34, Feni Centre, Dhaka</span>
            </li>
            <li className='office-address'>
              <MdOutlineMailOutline className='address-icon'></MdOutlineMailOutline>
              <span>mohammadazimuddin274@gmail.com</span>
            </li>
            <li className='office-address'>
              <TbPhone className='address-icon'></TbPhone>
              <span>+000-18830-61967</span>
            </li>
          </ul>
        </div>

        <div className='footer-info'>
          <span className="footer-title">Services</span>
          <ul>
            <li>Design</li>
            <li>Responsive</li>
            <li>Development</li>
            <li>Marketing</li>
          </ul>
        </div>

        <div className='footer-info'>
          <span className="footer-title">Company</span>
          <ul>
            <li><Link to={'/'} className="link link-hover">About us</Link> </li>
            <li> <Link to={'/'} className="link link-hover">Contact</Link> </li>
            <li> <Link to={'/'} className="link link-hover">Jobs</Link> </li>
            <li><Link to={'/'} className="link link-hover">Press kit</Link></li>
          </ul>
        </div>

        <div>
          <span className="follow-title">Follow Us</span>
          <div className="social-icon">
            <FaFacebookSquare className='icon'></FaFacebookSquare>
            <BsLinkedin className='icon'></BsLinkedin>
            <BsInstagram className='icon'></BsInstagram>
            <BsYoutube className='icon'></BsYoutube>
          </div>
        </div>
      </div>
      <p className='copy-right'><small>Copyright © 2023 All Rights Reserved</small></p>
    </footer>
  );
};

export default Footer;