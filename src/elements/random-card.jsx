import iceSymbol from "./ice-symbol.png"
import fireSymbol from "./fire-symbol.png"
import manaSymbol from "./mana-symbol.png"
import earthSymbol from "./earth-symbol.png"

function randomCard(){
    const cardArray =[{ type: "Fire", dmg: 2, symbol:fireSymbol},{ type: "Earth", dmg: 2, symbol:earthSymbol },{ type: "Mana", dmg: 1, symbol:manaSymbol },{ type: "Mana", dmg: 1, symbol:manaSymbol },{ type: "Mana", dmg: 1, symbol:manaSymbol },{ type: "Ice", dmg: 2, symbol:iceSymbol}]
const num = Math.ceil(Math.random() * 6) -1
return cardArray[num]}

export default randomCard