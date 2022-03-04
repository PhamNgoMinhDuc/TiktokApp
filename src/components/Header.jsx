import React from "react";

import logo from "../assets/logo-text.png";
import { GoCloudUpload } from "react-icons/go";
import { BiMessageAltMinus, BiPaperPlane, BiLogIn } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineUser, AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { BsKeyboard } from "react-icons/bs";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img className="header-logo" src={logo} alt="" />
        <div className="header-input">
          <input type="text" placeholder="Search accounts and videos" />
          <AiOutlineSearch className="search-icon" />
        </div>
        <div className="icons">
          <div className="icon-item">
            <GoCloudUpload style={{ fontSize: "26px", cursor: "pointer" }} />
            <div className="icon-decs">Upload</div>
          </div>
          <div className="icon-item">
            <BiPaperPlane style={{ fontSize: "26px", cursor: "pointer" }} />
            <div className="icon-decs">Message</div>
          </div>
          <div className="icon-item">
            <BiMessageAltMinus style={{ fontSize: "26px", cursor: "pointer" }} />
            <div className="icon-decs">Inbox</div>
          </div>

          {/* <img className="user-logo" src={logo} alt="" /> */}
          <div className="user-logo">
            <ul className="user-list">
              <li className="user-item">
                <AiOutlineUser className="logo-user" />
                <a href="#">View profile</a>
              </li>
              <li className="user-item">
                <FaTiktok className="logo-user" />
                <a href="#">Get icons</a>
              </li>
              <li className="user-item">
                <AiOutlineSetting className="logo-user" />
                <a href="#">Setting</a>
              </li>
              <li className="user-item">
                <GrLanguage className="logo-user" />
                <a href="#">Language</a>
              </li>
              <li className="user-item">
                <AiOutlineQuestionCircle className="logo-user" />
                <a href="#">Feedback and help</a>
              </li>
              <li className="user-item">
                <BsKeyboard className="logo-user" />
                <a href="#">Keybroad shortcuts</a>
              </li>
              <li className="user-item">
                <BiLogIn className="logo-user" />
                <a href="#">Log out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
