import { useSelector } from "react-redux";

const PlayerName = (props) => {
  const playerName = useSelector((state) => state.player.name);

  return <span {...props}>{playerName}</span>;
};

export default PlayerName;
