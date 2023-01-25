import randomCard from "./random-card";
import backSymbol from "./back-symbol.png";

let round = 0;

function roundEnd(mage, setMage, setText, cardBoardState, setCardBoardState) {
  round++;
  const board = structuredClone(cardBoardState);
  calculateDamage(board.aiPlay1, board.plPlay1);
  calculateDamage(board.aiPlay2, board.plPlay2);
  calculateDamage(board.aiPlay3, board.plPlay3);
  board.plSpell = calculateSpell([
    board.plPlay1.type,
    board.plPlay2.type,
    board.plPlay3.type,
  ]);
  board.aiSpell = calculateSpell([
    board.aiPlay1.type,
    board.aiPlay2.type,
    board.aiPlay3.type,
  ]);
  

  const nextBoard = structuredClone(cardBoardState);
  const nextMage = structuredClone(mage);
  nextMage.playerHp =
    nextMage.playerHp -
    (board.aiSpell +=
      board.aiPlay1.dmg +=
      board.aiPlay2.dmg +=
        board.aiPlay3.dmg);
  nextMage.aiHp =
    nextMage.aiHp -
    (board.plSpell +=
      board.plPlay1.dmg +=
      board.plPlay2.dmg +=
        board.plPlay3.dmg);
  if (nextMage.aiHp < 1) return setText({ true: true, text: "you win!" });
  if (nextMage.playerHp < 1) return setText({ true: true, text: "you lose!" });

  nextMage.hand.card1.type === "Back"
    ? (nextMage.hand.card1 = randomCard())
    : (nextMage.hand.card1 = nextMage.hand.card1);
  nextMage.hand.card2.type === "Back"
    ? (nextMage.hand.card2 = randomCard())
    : (nextMage.hand.card2 = nextMage.hand.card2);
  nextMage.hand.card3.type === "Back"
    ? (nextMage.hand.card3 = randomCard())
    : (nextMage.hand.card3 = nextMage.hand.card3);
  nextMage.hand.card4.type === "Back"
    ? (nextMage.hand.card4 = randomCard())
    : (nextMage.hand.card4 = nextMage.hand.card4);
  nextMage.hand.card5.type === "Back"
    ? (nextMage.hand.card5 = randomCard())
    : (nextMage.hand.card5 = nextMage.hand.card5);
  nextBoard.aiPlay1 = randomCard();
  nextBoard.aiPlay2 = randomCard();
  nextBoard.aiPlay3 = randomCard();
  nextBoard.plPlay1 = { type: "Back", dmg: 0, symbol: backSymbol };
  nextBoard.plPlay2 = { type: "Back", dmg: 0, symbol: backSymbol };
  nextBoard.plPlay3 = { type: "Back", dmg: 0, symbol: backSymbol };
  setMage(nextMage);
  setCardBoardState(nextBoard);
  return setText({
    true: true,
    text: `round ${round}


opponent health ${nextMage.aiHp}



your health ${nextMage.playerHp}











`,
  });
}

function calculateDamage(compare, to) {
  if (compare.type === "Fire" && to.type === "Earth") compare.dmg = 1;
  if (compare.type === "Earth" && to.type === "Ice") compare.dmg = 1;
  if (compare.type === "Ice" && to.type === "Fire") compare.dmg = 1;
  if (to.type === "Fire" && compare.type === "Earth") to.dmg = 1;
  if (to.type === "Earth" && compare.type === "Ice") to.dmg = 1;
  if (to.type === "Ice" && compare.type === "Fire") to.dmg = 1;
}
function calculateSpell(cardArr) {
  if (cardArr.filter((element) => element === "Mana").length === 3) {
    return 2;
  } else if (cardArr.filter((element) => element === "Fire").length === 3) {
    return 3;
  } else if (cardArr.filter((element) => element === "Earth").length === 3) {
    return 3;
  } else if (cardArr.filter((element) => element === "Water").length === 3) {
    return 3;
  }
  const elementTest = cardArr.filter((element) => element !== "Mana");
  if (elementTest.length !== 3) {
    return 0;
  } else if (
    elementTest.lastIndexOf(elementTest[0]) === 0 &&
    elementTest.lastIndexOf(elementTest[1]) === 1
  ) {
    return 5;
  }
  return 0;
}
export default roundEnd;
