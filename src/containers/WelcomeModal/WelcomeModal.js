import { useState } from "react";
import { useDispatch } from "react-redux";
import TextTransition, { presets } from "react-text-transition";
import { closeModal } from "../../store/actions";

import classes from "./WelcomeModal.module.css";

const TEXTS = [
  <>
    <p>
      <strong>
        Sabemos como é complicado coletar e tratar dados relacionados à
        obesidade infantil.
      </strong>
    </p>
    <p>
      São diversos os empecilhos, como: baixa consistência; ausência de estudos
      de validação; baixa representatividade da população brasileira; e
      sobrecarga de trabalho dos profissionais na operacionalização do sistema.
    </p>
    <p>
      <strong>
        Pensando nisso, projetamos uma forma de conseguir esses dados de maneira
        extremamente natural e espontânea.
      </strong>
    </p>
    <p>
      <em>Clique em qualquer área na tela para continuar.</em>
    </p>
  </>,
  <>
    <p>
      Desenvolvemos um jogo para smartphones através do qual crianças e
      adolescentes de todas as idades controlam um personagem único e guerreiam
      contra adversários reais.
    </p>
    <p>
      Mas o mais legal é que os jogadores só conseguem ficar fortes e poderosos
      caso tratem de se alimentar adequadamente na vida real. Comer frutas e
      verduras, beber água e alimentar-se nas horas certas é o que conta de
      verdade no FoodHero.
    </p>
    <p>
      <strong>E como fazemos isso?</strong> Para ganhar pontos, os jogadores
      precisam fotografar tudo aquilo que comem ao longo do dia. Nossa
      plataforma, equipada com inteligência artificial, reconhece então os
      alimentos presentes nas fotos e os credita de acordo.
    </p>
    <p>
      <em>Clique para continuar...</em>
    </p>
  </>,
  <>
    <p>
      Mas não é só isso: nossa plataforma fica também constantemente{" "}
      <strong>
        coletando e registrando dados essenciais ao combate da obesidade
        infantil.
      </strong>
    </p>
    <p>
      Para cada foto submetida na nossa plataforma, temos acesso a informações
      importantes, como a quantidade de calorias e o tipo de alimento que aquele
      jogador acabou de ingerir. Isso multiplicado por diversos usuários nos
      permite popular um banco de dados gigantesco!
    </p>
    <p>
      Também conseguimos extrair informações de peso e altura, tal como nível de
      esforço físico por dia, através de missões e desafios especiais que a
      nossa plataforma lança rotineiramente aos nossos jogadores. Tudo isso
      totalmente <strong>sem atrito</strong>, acontecendo por debaixo dos panos!
    </p>
    <p>
      <em>Clique para conhecer!</em>
    </p>
  </>,
];

const WelcomeModal = () => {
  const [stage, setStage] = useState(0);
  const dispatch = useDispatch();

  const handleClickOnModal = () => {
    if (stage < TEXTS.length - 1) {
      setStage((currStage) => currStage + 1);
    } else {
      dispatch(closeModal("welcome"));
    }
  };

  return (
    <div className={classes.WelcomeModal} onClick={handleClickOnModal}>
      <div className={classes.WelcomeModalContent}>
        <div>
          <h1>
            <TextTransition
              text="Bem-vindo(a) ao FoodHero!"
              springConfig={presets.wobbly}
            />
          </h1>
          <TextTransition
            text={TEXTS[stage]}
            springConfig={presets.gentle}
            delay={stage === 0 && 1500}
          />
        </div>
        {stage !== TEXTS.length - 1 && (
          <button
            className={classes.SkipIntroBtn}
            onClick={() => dispatch(closeModal("welcome"))}
          >
            Pular introdução
          </button>
        )}
      </div>
    </div>
  );
};

export default WelcomeModal;
