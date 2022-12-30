import roundEnd from "./round-end"


function Card({mage,setMage,cardNo, cardBoardState, setCardBoardState, setText}){
    const handleClick = event => {addCardToBoard(mage,cardNo, setMage, cardBoardState, setCardBoardState, setText)};
return <div className={mage.hand[cardNo].type + " card"} onClick={handleClick}><h6>{mage.hand[cardNo].type}</h6></div>
};
let cardsPlayed = 0
function addCardToBoard(mage,cardNo, setMage, cardBoardState, setCardBoardState, setText){
    const changeHand = structuredClone(mage);
    if (changeHand.hand[cardNo].type === "Back"){return}
    cardsPlayed++ 
    const addToBoard = structuredClone(cardBoardState)
    addToBoard[`plPlay${cardsPlayed}`] = changeHand.hand[cardNo] 
    changeHand.hand[cardNo] = {type:"Back",dmg:0};
    setCardBoardState(addToBoard)
    setMage(changeHand)
    if (cardsPlayed === 3){
       cardsPlayed = 0
       roundEnd(changeHand,setMage,setText,addToBoard,setCardBoardState)
       return
   }
}

export default Card
