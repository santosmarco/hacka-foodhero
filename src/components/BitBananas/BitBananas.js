import { useSelector } from "react-redux";
import { GiBananaPeeled } from "react-icons/gi";

import classes from "./BitBananas.module.css";

const BitBananas = (props) => {
  const bitBananas = useSelector((state) => state.player.bitBananas);

  return (
    <span
      {...props.wrapperProps}
      className={`${classes.BitBananas}${
        props.className ? ` ${props.className}` : ""
      }`}
    >
      <div className={classes.BitBananasVal}>
        {props.value ? props.value : bitBananas}
      </div>
      <GiBananaPeeled
        {...props.iconProps}
        className={`${classes.BitBananasIcon}${
          props.yellowIcon ? classes.BitBananasIconYellow : ""
        }`}
      />
    </span>
  );
};

export default BitBananas;
