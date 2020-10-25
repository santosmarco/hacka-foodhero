import { useDispatch } from "react-redux";
import { RiStore2Line } from "react-icons/ri";
import { GiCrossedSwords } from "react-icons/gi";
import { openModal } from "../../store/actions";

import classes from "./BottomBar.module.css";

const BottomBar = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.BottomBar}>
      <div className={classes.RegisterMealWrapper}>
        <button
          onClick={() => dispatch(openModal("meal"))}
          className={classes.RegisterMealBtn}
        >
          REFEIÇÃO
        </button>
      </div>
      <div className={classes.SmallBtnsWrapper}>
        <button
          onClick={() => dispatch(openModal("store"))}
          className={`${classes.SmallBtn} ${classes.SmallBtnYellow}`}
        >
          <RiStore2Line />
        </button>
      </div>
      <div
        onClick={() => dispatch(openModal("dungeon"))}
        className={`${classes.SmallBtnsWrapper} ${classes.GoToBattleWrapper}`}
      >
        <button className={classes.SmallBtn}>
          <GiCrossedSwords />
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
