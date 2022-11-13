import React from "react";
import config from "../../config.json";
import Timeline from "./Home/components/Timeline";
import Header from "./Home/components/Header";
import Menu from "./Home/components/Menu";
import { CSSReset } from "./styles/CSSReset";

const HomePage = () => {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlists={{ ...config.playlists }} />
      </div>
    </>
  );
};

export default HomePage;
