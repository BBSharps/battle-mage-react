import Card from "./card"
function PlayerHand({setCardBoardState, cardBoardState, mage, setMage, setText}) {
    return<div className="playerHand">
    <Card mage={mage} setMage={setMage} cardNo="card1" setCardBoardState={setCardBoardState} cardBoardState={cardBoardState} setText={setText}/>
    <Card mage={mage} setMage={setMage} cardNo="card2" setCardBoardState={setCardBoardState} cardBoardState={cardBoardState} setText={setText}/>
    <Card mage={mage} setMage={setMage} cardNo="card3" setCardBoardState={setCardBoardState} cardBoardState={cardBoardState} setText={setText}/>
    <Card mage={mage} setMage={setMage} cardNo="card4" setCardBoardState={setCardBoardState} cardBoardState={cardBoardState} setText={setText}/>
    <Card mage={mage} setMage={setMage} cardNo="card5" setCardBoardState={setCardBoardState} cardBoardState={cardBoardState} setText={setText}/>
    </div>
}



export default PlayerHand