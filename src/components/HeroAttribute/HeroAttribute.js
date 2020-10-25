import { useSelector } from "react-redux";
import {
  GiHealthNormal,
  GiBroadsword,
  GiRosaShield,
  GiSpellBook,
  GiRun,
} from "react-icons/gi";

import classes from "./HeroAttribute.module.css";

const HeroAttribute = (props) => {
  const attrType = props.type.trim().toLowerCase();
  const { health, strength, armor, spell, stamina } = useSelector(
    (state) => state.player.hero.attributes
  );

  const BaseDisplay = (attrProps) => (
    <span
      {...props}
      className={`${classes.HeroAttribute}${
        props.className ? ` ${props.className}` : ""
      }`}
    >
      <attrProps.icon className={`${classes.HeroAttributeIcon}`} />
      <div className={classes.HeroAttributeVal}>{attrProps.value}</div>
    </span>
  );

  switch (attrType) {
    case "health":
      return <BaseDisplay value={health} icon={GiHealthNormal} />;
    case "strength":
      return <BaseDisplay value={strength} icon={GiBroadsword} />;
    case "armor":
      return <BaseDisplay value={armor} icon={GiRosaShield} />;
    case "spell":
      return <BaseDisplay value={spell} icon={GiSpellBook} />;
    case "stamina":
      return <BaseDisplay value={stamina} icon={GiRun} />;
    default:
      return null;
  }
};

export default HeroAttribute;
