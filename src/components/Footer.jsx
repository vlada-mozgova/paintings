import React from "react";
import { useSelector } from "react-redux";
import address from "../images/address.png";
import phone from "../images/phone.png";
import logo from "../images/thefamousFooter.png";
import { MenuPoints } from "../shared_components/MenuPoints";
import "../styles/Footer.scss";

export const Footer = () => {
  const menu = useSelector((state) => state.menu.menu);
  return (
    <div className="footer">
      <div className="menu-box-footer">
        <div className="menubar-footer">
          <img src={logo} className="logo-img-footer" alt="logo" />
          {menu.map((point) => (
            <MenuPoints key={point} text={point} />
          ))}
        </div>
        <div className="contacts">
          <div className="contact-box">
            <div className="contact-bar">
              <img src={phone} alt="phone" className="contact-img" />
              <p className="text-phone">+380 (99) 999-99-99</p>
            </div>
            <div className="contact-bar-address">
              <img src={address} alt="address" className="contact-img" />
              <p className="text-address">
                г. Харьков, ул. Академика Павлова, 24
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
