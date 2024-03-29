import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png"></img>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png"></img>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png"></img>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png"></img>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
