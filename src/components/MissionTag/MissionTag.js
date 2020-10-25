import BitBananas from "../BitBananas/BitBananas";

import classes from "./MissionTag.module.css";

const MissionTag = ({ mission }) => {
  const { text, value, done } = mission;

  return (
    <div className={classes.MissionTag}>
      <div className={classes.MissionTextWrapper}>
        <div
          className={`${classes.DoneIndicator}${
            done ? ` ${classes.DoneIndicatorTrue}` : ""
          }`}
        />
        <span style={{ textDecoration: done && "line-through" }}>{text}</span>
      </div>
      <BitBananas
        yellowIcon
        value={value}
        wrapperProps={{
          style: { textDecoration: done && "line-through" },
        }}
        iconProps={{ style: { fontSize: "1rem", color: "#f2d600" } }}
      />
    </div>
  );
};

export default MissionTag;
