import React, { useState, useEffect } from "react";
import "../../src/assets/css/MaeContent.css";
import Menu from "./Menu";
import Content from "./Content";

const MaeContent = () => {
  return (
    <div id="container-content">
      <div id="mae-content">
        <div class="menu">
          <Menu></Menu>
        </div>
        <div class="content">
          <Content></Content>
        </div>
      </div>
    </div>
  );
};

export default MaeContent;
