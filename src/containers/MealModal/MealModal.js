import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../../store/actions";

import classes from "./MealModal.module.css";

const MealModal = (props) => {
  const [file, setFile] = useState();
  const fileField = useRef();
  const dispatch = useDispatch();

  const onFileSelection = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const onSelfClosure = () => {
    fileField.current.value = null;
    setFile(null);
    dispatch(closeModal("meal"));
  };

  const onFileUpload = () => {
    dispatch(openModal("food"));
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
          <input type="file" ref={fileField} onChange={onFileSelection} />
          <div className={classes.BtnWrapper}>
            <button
              className={`${classes.MealModalBtn} ${classes.SecondaryBtn}`}
              onClick={onSelfClosure}
            >
              Voltar
            </button>
            <button
              className={classes.MealModalBtn}
              disabled={!file}
              onClick={onFileUpload}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      <img
        id="foodImg"
        src={file && URL.createObjectURL(file)}
        className={classes.PlaceholderImg}
        alt="Placeholder"
      />
    </>
  );
};

export default MealModal;
