import SpellWindow from "./spell-window";
import BoardWindow from "./board-window";
import PlayerHand from "./player-hand";
import Text from "./text";
import randomCard from "./random-card";
import { useState } from "react";
import backSymbol from "./back-symbol.png";
import spellSymbol from "./spell-symbol.png";

function MobileWindow() {
  const [mage, setMage] = useState({
    hand: {
      card1: randomCard(),
      card2: randomCard(),
      card3: randomCard(),
      card4: randomCard(),
      card5: randomCard(),
    },
    playerHp: 35,
    aiHp: 35,
  });
  const [cardBoardState, setCardBoardState] = useState({
    spellPlay: { type: "spell", dmg: 0, symbol: spellSymbol },
    aiPlay1: randomCard(),
    aiPlay2: randomCard(),
    aiPlay3: randomCard(),
    aiSpell: 0,
    plPlay1: { type: "Back", dmg: 0, symbol: backSymbol },
    plPlay2: { type: "Back", dmg: 0, symbol: backSymbol },
    plPlay3: { type: "Back", dmg: 0, symbol: backSymbol },
    plSpell: 0,
  });
  const [textTrue, setText] = useState({
    true: true,
    text: `welcome to Battle Mage
    
    The Earth smothers the Fire,
    The Fire melts the Ice,
    The Ice cracks the Earth,  
    Mana permiates all.
    
    
    Click the screen to play
    
    
    
    
    
    
    
    
    
    
    
    
    `,
  });
  return (
    <div className="linkMobile">
      <Text textTrue={textTrue} setText={setText} />
      <div className="mobileWindow">
        <SpellWindow />
        <BoardWindow cardBoardState={cardBoardState} />
        <PlayerHand
          setCardBoardState={setCardBoardState}
          cardBoardState={cardBoardState}
          mage={mage}
          setMage={setMage}
          textTrue={textTrue}
          setText={setText}
        />
      </div>
    </div>
  );
}

export default MobileWindow;
