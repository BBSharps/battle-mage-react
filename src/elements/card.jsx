import roundEnd from "./round-end";
import backSymbol from "./back-symbol.png";

function Card({
  mage,
  setMage,
  cardNo,
  cardBoardState,
  setCardBoardState,
  setText,
}) {
  const handleClick = (event) => {
    addCardToBoard(
      mage,
      cardNo,
      setMage,
      cardBoardState,
      setCardBoardState,
      setText
    );
  };
  return (
    <div className={mage.hand[cardNo].type + " card"} onClick={handleClick}>
      {mage.hand[cardNo].type === "Back" ? null : (
        <h6>{mage.hand[cardNo].type}</h6>
      )}
      {mage.hand[cardNo].type === "Back" ? null : (
        <img src={mage.hand[cardNo].symbol} alt="card"></img>
      )}
    </div>
  );
}
let cardsPlayed = 0;
function addCardToBoard(
  mage,
  cardNo,
  setMage,
  cardBoardState,
  setCardBoardState,
  setText
) {
  const changeHand = structuredClone(mage);
  if (changeHand.hand[cardNo].type === "Back") {
    return;
  }
  cardsPlayed++;
  const addToBoard = structuredClone(cardBoardState);
  addToBoard[`plPlay${cardsPlayed}`] = changeHand.hand[cardNo];
  changeHand.hand[cardNo] = { type: "Back", dmg: 0, symbol: backSymbol };
  setCardBoardState(addToBoard);
  setMage(changeHand);
  if (cardsPlayed === 3) {
    cardsPlayed = 0;
    roundEnd(changeHand, setMage, setText, addToBoard, setCardBoardState);
    return;
  }
}

export default Card;
