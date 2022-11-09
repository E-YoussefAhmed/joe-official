import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/ya23122002">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100011448804193">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/youssef1125/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
