import { useSelector, useDispatch } from "react-redux";
import { setNextChar } from "../../store/actions";
import archerSrc from "../../assets/img/hero-1.png";
import mageSrc from "../../assets/img/hero-2.png";
import necroSrc from "../../assets/img/hero-3.png";
import knightSrc from "../../assets/img/hero-4.png";
import zombieKnightSrc from "../../assets/img/hero-5.png";

import classes from "./HeroImg.module.css";

const HeroImg = (props) => {
  const char = useSelector((state) => state.player.hero.char);
  const dispatch = useDispatch();

  let imgSrc;
  switch (char) {
    case "archer":
      imgSrc = archerSrc;
      break;
    case "mage":
      imgSrc = mageSrc;
      break;
    case "necro":
      imgSrc = necroSrc;
      break;
    case "knight":
      imgSrc = knightSrc;
      break;
    case "zombieKnight":
      imgSrc = zombieKnightSrc;
      break;
    default:
      break;
  }

  return (
    <img
      {...props}
      className={`${classes.HeroImg}${
        props.className ? ` ${props.className}` : ""
      }`}
      src={imgSrc}
      onClick={() => dispatch(setNextChar())}
      alt="Hero"
    />
  );
};

export default HeroImg;
