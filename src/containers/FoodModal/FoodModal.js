import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  GiShinyApple,
  GiChickenOven,
  GiCarrot,
  GiPineapple,
} from "react-icons/gi";
import HashLoader from "react-spinners/HashLoader";
import BitBananas from "../../components/BitBananas/BitBananas";
import { closeModal, addBitBananas } from "../../store/actions";

import classes from "./FoodModal.module.css";

let EXAMPLE_FOODS = [
  { name: "maçã", reward: 200, icon: GiShinyApple, masculine: false },
  { name: "frango", reward: 300, icon: GiChickenOven, masculine: true },
  { name: "cenoura", reward: 100, icon: GiCarrot, masculine: false },
  { name: "abacaxi", reward: 190, icon: GiPineapple, masculine: true },
];

const FoodModal = () => {
  const [food, setFood] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setFood(EXAMPLE_FOODS[0]);
      if (EXAMPLE_FOODS.length > 1) {
        EXAMPLE_FOODS = EXAMPLE_FOODS.slice(1);
      }
    }, 2300);
  }, []);

  useEffect(() => {
    if (food) {
      dispatch(addBitBananas(food.reward));
    }
  }, [dispatch, food]);

  return (
    <div
      className={classes.FoodModal}
      onClick={() => {
        if (food) {
          setFood(null);
          dispatch(closeModal("meal"));
          dispatch(closeModal("food"));
        }
      }}
    >
      <div className={classes.FoodModalContent}>
        {food ? (
          <>
            <food.icon className={classes.FoodIcon} />
            <h2>
              WOW! {food.masculine ? "Um" : "Uma"} {food.name}!
            </h2>
            <hr className={classes.Divider} />
            <p>
              Parabéns! Você comeu {food.masculine ? "um" : "uma"} {food.name}{" "}
              em um bom horário!
            </p>
            <div className={classes.RewardArea}>
              Você ganhou:
              <h1>
                <BitBananas
                  value={food.reward}
                  iconProps={{ style: { fontSize: "2.5rem" } }}
                />
              </h1>
            </div>
          </>
        ) : (
          <>
            <HashLoader color="#f1faee" />
            <div className={classes.LoadingMessage}>
              Analisando sua imagem...
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FoodModal;
