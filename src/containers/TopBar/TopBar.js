import { useSelector } from "react-redux";
import PlayerName from "../../components/PlayerName/PlayerName";
import BitBananas from "../../components/BitBananas/BitBananas";
import LevelBar from "../../components/LevelBar/LevelBar";

import classes from "./TopBar.module.css";

const TopBar = () => {
  const currLevel = useSelector((state) => state.player.level.current);

  return (
    <div>
      <div className={classes.TopBar}>
        <div>
          <PlayerName className={classes.PlayerName} />
          <span className={classes.PlayerLevel}>(Level {currLevel})</span>
        </div>
        <BitBananas />
      </div>
      <LevelBar />
    </div>
  );
};

export default TopBar;
