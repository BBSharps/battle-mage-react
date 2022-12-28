
function randomCard(){
    const cardArray =[{ type: "Fire", dmg: 2 },{ type: "Earth", dmg: 2 },{ type: "Mana", dmg: 1 },{ type: "Mana", dmg: 1 },{ type: "Mana", dmg: 1 },{ type: "Ice", dmg: 2 }]
const num = Math.ceil(Math.random() * 6) -1
return cardArray[num]}

export default randomCard