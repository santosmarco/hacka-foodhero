import { useRef } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { openModal, closeModal } from "../../store/actions";

import classes from "./MealModal.module.css";

const MealModal = (props) => {
  const fileField = useRef();
  const dispatch = useDispatch();

  const onFileSelection = (event) => {
    dispatch(openModal("food"));
  };

  const onSelfClosure = () => {
    fileField.current.value = null;
    dispatch(closeModal("meal"));
  };

  return (
    <>
      <div className={classes.MealModal}>
        <div className={classes.MealModalContent}>
          <h4>Upload de Refeição</h4>
          <p>
            Você está comendo? Então poste uma foto da sua refeição para ganhar{" "}
            <strong>BitBananas</strong>!
          </p>
          <Form.File
            custom
            id="custom-file"
            label="Clique para tirar foto"
            data-browse="Escolher..."
            ref={fileField}
            onChange={onFileSelection}
            accept="image/*"
            capture
          />
          <div className={classes.BtnWrapper}>
            <button
              className={`${classes.MealModalBtn} ${classes.SecondaryBtn}`}
              onClick={onSelfClosure}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealModal;
