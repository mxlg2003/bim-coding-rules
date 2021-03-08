import React, { useState } from "react";
import Logo from "./Logo";
import AppMenu from "./AppMenu";
import NavTools from "./NavTools";
const FrameNav = () => {

  return (
    <div className={"frame-nav frame-nav-grid"} >
      <Logo />
      <AppMenu />
      <NavTools />
    </div>
  );
};

export default FrameNav;
