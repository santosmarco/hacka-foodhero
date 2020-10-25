import { useDispatch } from "react-redux";
import { closeModal } from "../../store/actions";

import classes from "./StoreModal.module.css";

const StoreModal = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={classes.StoreModal}
      onClick={() => dispatch(closeModal("store"))}
    >
      <div className={classes.StoreModalContent}>
        <h1>Loja</h1>
        <p>
          Aqui os jogadores poderão trocar suas BitBananas por melhores
          artefatos de batalha, baús misteriosos que podem revelar prêmios
          incríveis, entre vários outros itens.
        </p>
        <p>
          <strong>Também é aqui que monetizamos:</strong> os jogadores poderão
          comprar roupas e equipamentos exclusivos para o seu personagem ou
          créditos de BitBananas, usando dinheiro de verdade.
        </p>
      </div>
    </div>
  );
};

export default StoreModal;
