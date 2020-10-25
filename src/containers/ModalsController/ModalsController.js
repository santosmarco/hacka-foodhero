import { useSelector } from "react-redux";
import MealModal from "../MealModal/MealModal";
import FoodModal from "../FoodModal/FoodModal";
import StoreModal from "../StoreModal/StoreModal";
import DungeonModal from "../DungeonModal/DungeonModal";
import WelcomeModal from "../WelcomeModal/WelcomeModal";

const ModalsController = () => {
  const modals = useSelector((state) => state.app.modals);
  const openModals = Object.entries(modals).filter(
    ([modalName, modalValues]) => modalValues.visible
  );

  if (openModals.length === 0) {
    return <></>;
  }
  return (
    <>
      {openModals.map(([modalName, modalValues]) => {
        switch (modalName) {
          case "meal":
            return <MealModal />;
          case "food":
            return <FoodModal />;
          case "store":
            return <StoreModal />;
          case "dungeon":
            return <DungeonModal />;
          case "welcome":
            return <WelcomeModal />;
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default ModalsController;
