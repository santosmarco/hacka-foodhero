import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import classes from "./DailyGoalIndicator.module.css";

const DailyGoalIndicator = (props) => {
  const percentage = Math.round((props.current / props.target) * 100);

  const generatePathColor = (percentage) => {
    const red = [235, 90, 69];
    const yellow = [242, 214, 0];
    const green = [97, 189, 78];
    let rgb;

    if (percentage < 50) {
      rgb = [
        red[0] + Math.abs(yellow[0] - red[0]) * (percentage / 100),
        red[1] + Math.abs(yellow[1] - red[1]) * (percentage / 100),
        red[2] - Math.abs(yellow[2] - red[2]) * (percentage / 100),
      ];
    } else {
      rgb = [
        yellow[0] - Math.abs(green[0] - yellow[0]) * (percentage / 100),
        yellow[1] - Math.abs(green[1] - yellow[1]) * (percentage / 100),
        yellow[2] + Math.abs(green[2] - yellow[2]) * (percentage / 100),
      ];
    }

    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  };

  const indicator = (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      className={classes.Indicator}
      styles={buildStyles({
        pathColor: generatePathColor(percentage),
        textColor: "#f1faee",
        trailColor: "#f1faee",
      })}
    />
  );

  if (props.withText) {
    return (
      <div className={classes.IndicatorWrapper}>
        {indicator}
        <div className={classes.IndicatorText}>
          Você cumpriu
          <br />
          <strong>{percentage}% duas suas missões</strong> hoje!
        </div>
      </div>
    );
  }
  return indicator;
};

export default DailyGoalIndicator;
