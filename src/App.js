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
  return (
    <>
      <div
        className="d-none d-sm-flex align-items-center justify-content-center flex-column text-light"
        style={{ height: "100vh", backgroundColor: "#1d3557" }}
      >
        <p>FoodHero ainda não está otimizado para telas maiores.</p>
        <p className="font-weight-bold">
          Por favor, acesse esse mesmo link através de um smartphone.
        </p>
      </div>
      <div className="d-sm-none">
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
      </div>
    </>
  );
};

export default App;
