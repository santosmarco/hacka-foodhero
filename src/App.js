import { useRef } from "react";
import TopBar from "./containers/TopBar/TopBar";
import DailyGoal from "./containers/DailyGoal/DailyGoal";
import Missions from "./containers/Missions/Missions";
import Hero from "./containers/Hero/Hero";
import BottomBar from "./containers/BottomBar/BottomBar";
import ModalsController from "./containers/ModalsController/ModalsController";

import soundtrack from "./assets/audio/soundtrack.mp3";
import silence from "./assets/audio/silence.mp3";

import classes from "./App.module.css";

const App = () => {
  const audio = useRef();
  console.log(audio);
  return (
    <>
      <div className={classes.App}>
        <div>
          <TopBar />
          <DailyGoal />
        </div>
        <Missions />
        <div>
          <Hero />
          <BottomBar />
        </div>
      </div>
      <iframe
        title="Soundtrack's iFrame"
        src={silence}
        allow="autoplay"
        style={{ display: "none" }}
      ></iframe>
      <audio autoPlay loop>
        <source src={soundtrack} type="audio/mp3" />
      </audio>
      <ModalsController />
    </>
  );
};

export default App;
