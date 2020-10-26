import { useSelector } from "react-redux";
import MissionTag from "../../components/MissionTag/MissionTag";

import classes from "./Missions.module.css";

const Missions = () => {
  const missions = useSelector((state) => state.player.missions);

  return (
    <div className={classes.Missions}>
      <strong>Suas missões</strong>
      {missions.map((m) => (
        <MissionTag key={m.text} mission={m} />
      ))}
    </div>
  );
};

export default Missions;
