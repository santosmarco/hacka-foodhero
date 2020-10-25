import HeroImg from "../../components/HeroImg/HeroImg";
import HeroAttribute from "../../components/HeroAttribute/HeroAttribute";

import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <div className={classes.HeroArea}>
      <HeroImg />
      <div className={classes.HeroAttributesWrapper}>
        <HeroAttribute type="health" />
        <HeroAttribute type="strength" />
        <HeroAttribute type="armor" />
        <HeroAttribute type="spell" />
        <HeroAttribute type="stamina" />
      </div>
    </div>
  );
};

export default Hero;
