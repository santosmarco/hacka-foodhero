import { useDispatch } from "react-redux";
import { closeModal } from "../../store/actions";

import classes from "./DungeonModal.module.css";

const DungeonModal = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={classes.DungeonModal}
      onClick={() => dispatch(closeModal("dungeon"))}
    >
      <div className={classes.DungeonModalContent}>
        <h1>Arena</h1>
        <p>
          É bem aqui que as coisas começam a ficar mais interessantes: os
          jogadores terão a oportunidade de colocar suas dietas em jogo para{" "}
          <strong>desafiar e enfrentar adversários reais</strong> — isso com os
          pontos de atributo e as BitBananas que conquistaram se alimentando de
          forma balanceada.
        </p>
        <p>
          Nessa mesma Arena, instituições de ensino do mundo todo poderão marcar
          duelos privados entre seus alunos, com o objetivo de incentivar a boa
          alimentação das crianças e fomentar a coleta de dados relacionados à
          obesidade infantil.
        </p>
      </div>
    </div>
  );
};

export default DungeonModal;
