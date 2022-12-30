import SpellWindow from "./elements/spell-window";
import BoardWindow from "./elements/board-window";
import PlayerHand from "./elements/player-hand";
import Text from "./elements/text";
import randomCard from "./elements/random-card";
import { useState } from "react";
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
    spellPlay: { type: "Back", dmg: 0 },
    aiPlay1: randomCard(),
    aiPlay2: randomCard(),
    aiPlay3: randomCard(),
    plPlay1: { type: "Back", dmg: 0 },
    plPlay2: { type: "Back", dmg: 0 },
    plPlay3: { type: "Back", dmg: 0 },
  });
  const [textTrue, setText] = useState({
    true: true,
    text: "welcome to Battle Mage",
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
