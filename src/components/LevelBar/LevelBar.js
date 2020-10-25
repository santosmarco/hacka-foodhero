import { useSelector } from "react-redux";

import classes from "./LevelBar.module.css";

const LevelBar = (props) => {
  const level = useSelector((state) => state.player.level);

  return (
    <div>
      <div
        className={classes.InnerLevelBar}
        style={{ width: `${(level.xp / level.targetXP) * 100}%` }}
      />
    </div>
  );
};

export default LevelBar;
