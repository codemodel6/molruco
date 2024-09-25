"use client";

import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

const Home = () => {
  useEffect(() => {
    new fullpage("#fullpage", {
      // 옵션 설정
      autoScrolling: true,
      scrollHorizontally: true,
    });
  }, []);

  return (
    <div id="fullpage">
      <div className="section">First Section</div>
      <div className="section">Second Section</div>
      <div className="section">Third Section</div>
      <div className="section">Fourth Section</div>
    </div>
  );
};

export default Home;
