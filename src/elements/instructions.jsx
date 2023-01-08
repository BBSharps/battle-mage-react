import { Link } from "react-router-dom";
function Instructions() {
  return (
    <div className="linkMobile">
      <p>
        Every round in Battle Mage, You and your opponent each play 3 cards.
      </p>
      <br></br>
      <p>
        The order that cards are played is important. Each card is played
        against the opponents card in the order that selected.{" "}
      </p>
      <p>1v1,2v2,3v3.</p>
      <br></br>
      <br></br>

      <p>
        Mana cards always deal 1 damage. Fire cards deal 2 damage or 1 against
        Earth cards. Ice cards deal 2 damage or 1 against Fire cards. Earth
        cards deal 2 damage or 1 against Ice cards.
      </p>
      <p>This is ture for both you and your opponent</p>
      <p>Some spells are also in play, Mouse over the scroll to see!</p>
      <br></br>
      <br></br>
      <p>
        You and your opponent each start with 35 Hit Points.The first to reduce
        thier opponents Hit Points to 0 wins.
      </p>

      <Link to="/">
        <button>game</button>
      </Link>
    </div>
  );
}

export default Instructions;
