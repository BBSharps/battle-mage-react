import spellSymbol from "./spell-symbol.png";
import { useState } from "react";
function SpellWindow() {
  const [spellPop, setSpellPop] = useState({ isTrue: false });
  return (
    <div className="spellWindow">
      {spellPop.isTrue ? (
        <div className={"spell-pop"}>
          <p>{spellPop.text}</p>
        </div>
      ) : null}
      {[
        "Play 3 Mana and get + 2 damage",
        "Play 3 of any Element and get + 3 damage",
        "Play 3 unique elements and get + 5 damage",
      ].map((number) => {
        return (
          <img
            key={number}
            onMouseEnter={() => {
              setSpellPop({ isTrue: true, text: number });
            }}
            onMouseLeave={() => {
              setSpellPop({ isTrue: false, text: number });
            }}
            onTouchStart={() => {
              setSpellPop({ isTrue: true, text: number });
            }}
            onTouchEnd={() => {
              setSpellPop({ isTrue: false });
            }}
            className="spell-icon"
            src={spellSymbol}
            alt="spell icon"
          ></img>
        );
      })}
    </div>
  );
}

export default SpellWindow;
