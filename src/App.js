import SpellWindow from "./elements/spell-window";
import BoardWindow from "./elements/board-window";
import PlayerHand from "./elements/player-hand";
import Text from "./elements/text";
import randomCard from "./elements/random-card";
import { useState } from "react";
import backSymbol from "./elements/back-symbol.png";
import spellSymbol from "./elements/spell-symbol.png";
import "./App.css";

function App() {
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
    plPlay1: { type: "Back", dmg: 0, symbol: backSymbol },
    plPlay2: { type: "Back", dmg: 0, symbol: backSymbol },
    plPlay3: { type: "Back", dmg: 0, symbol: backSymbol },
  });
  const [textTrue, setText] = useState({
    true: true,
    text: `welcome to Battle Mage

The Earth smothers the Fire,
The Fire melts the Ice,
The Ice cracks the Earth,  
Mana permiates all.  

Every round in Battle Mage, You and 
your opponent each play 3 cards.
The order that cards are played is 
important. Each card is played 
againstthe opponents card in the 
order that they are selected.
1v1,2v2,3v3.

Mana cards always deal 1 damage.
Fire cards deal 2 damage or 
1 against Earth cards.
Ice cards deal 2 damage or 
1 against Fire cards.
Earth cards deal 2 damage or 
1 against Ice cards.  

You and your opponent each start 
with 35 Hit Points.The first to have
0 Hit Points loses`,
  });
  return (
    <div className="App">
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

export default App;
