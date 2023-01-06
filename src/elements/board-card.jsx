function CardBoard({ cardState, setCardState, cardNo }) {
  return (
    <div className={cardState[cardNo].type + " cardBoard " + cardNo}>
      {cardState[cardNo].type === "Back" ? null : (
        <h6>{cardState[cardNo].type}</h6>
      )}
      {cardState[cardNo].type === "Back" ? null : (
        <img src={cardState[cardNo].symbol} alt="card"></img>
      )}
    </div>
  );
}

export default CardBoard;
