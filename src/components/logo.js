import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Logo = () => {
  return (
    <StaticImage
      src="../images/metris_logo.png"
      alt="William Whatley Logo"
      placeholder="blurred"
      width={150}
    />
  );
};
