import spellSymbol from "./spell-symbol.png";
import { useState } from "react";
function SpellWindow() {
  const [spellPop, setSpellPop] = useState({ isTrue: false });
  return (
    <div className="spellWindow">
      {spellPop.isTrue ? (
        <div className={"spell-pop"}>
          <p>spell</p>
        </div>
      ) : null}
      {[1, 2, 3].map((number) => {
        return (
          <img
            key={number}
            onMouseEnter={() => {
              setSpellPop({ isTrue: true });
            }}
            onMouseLeave={() => {
              setSpellPop({ isTrue: false });
            }}
            onTouchStart={() => {
              setSpellPop({ isTrue: true });
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
