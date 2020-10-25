import { useSelector } from "react-redux";
import DailyGoalIndicator from "../../components/DailyGoalIndicator/DailyGoalIndicator";

import classes from "./DailyGoal.module.css";

const DailyGoal = () => {
  const dailyGoal = useSelector((state) => state.player.dailyGoal);

  return (
    <div className={classes.DailyGoal}>
      <DailyGoalIndicator {...dailyGoal} withText />
    </div>
  );
};

export default DailyGoal;
