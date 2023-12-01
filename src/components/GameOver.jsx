import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div className="gameover">
      <h1>Fim de jogo!</h1>
      <h2>
        Você fez: <span>{score}</span> ponto(s)
      </h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
