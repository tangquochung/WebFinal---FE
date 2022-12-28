import "./Home.scss";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import H2 from "./motor.png";
function Home() {
  return (
    <div className="Home">
      <img
        src="https://images-ext-1.discordapp.net/external/2FWRz6H6hqP51L3h1YiJh-mLS6loCL2jDhPmuGz0Qic/https/wallpaperforu.com/wp-content/uploads/2020/09/bike-wallpaper-20091713503451.jpg?width=1246&height=701"
        alt="Img H2"
      />
      <div className="info">
        <p className="year">Mới nhất năm 2022</p>
        <h1 className="name">NINJA H2R</h1>
        <h2 className="Sub-title">BUILT BEYOND BELIEF</h2>
        <p className="desc">Sức mạnh vượt trội, Làm chủ cuộc chơi !</p>
        <h3 className="price">1.830.000.000₫</h3>
        <button className="btn">Mua Ngay</button>
      </div>
    </div>
  );
}

export default Home;
