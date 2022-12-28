import randomCard from "./random-card"

let round = 0

function roundEnd(mage, setMage,setText,cardBoardState,setCardBoardState){
    round++
    const nextBoard = structuredClone(cardBoardState)
    console.log(nextBoard)
    const nextMage = structuredClone(mage)
    nextMage.hp = nextMage.hp -3
    if (nextMage.hp < 0 ) return setText({true:true, text:"you lose!"})
        nextMage.hand.card1.type === "Back" ? nextMage.hand.card1 = randomCard() : nextMage.hand.card1 = nextMage.hand.card1;
        nextMage.hand.card2.type === "Back" ? nextMage.hand.card2 = randomCard() : nextMage.hand.card2 = nextMage.hand.card2;
        nextMage.hand.card3.type === "Back" ? nextMage.hand.card3 = randomCard() : nextMage.hand.card3 = nextMage.hand.card3;
        nextMage.hand.card4.type === "Back" ? nextMage.hand.card4 = randomCard() : nextMage.hand.card4 = nextMage.hand.card4;
        nextMage.hand.card5.type === "Back" ? nextMage.hand.card5 = randomCard() : nextMage.hand.card5 = nextMage.hand.card5;
        nextBoard.aiPlay1 = randomCard()
        nextBoard.aiPlay2 = randomCard()
        nextBoard.aiPlay3 = randomCard()
        nextBoard.plPlay1 = {type:"Back",dmg:0}
        nextBoard.plPlay2 = {type:"Back",dmg:0}
        nextBoard.plPlay3 = {type:"Back",dmg:0}
    setMage(nextMage)
    setCardBoardState(nextBoard)
    return setText({true:true, text:`round ${round}`})
}

export default roundEnd

