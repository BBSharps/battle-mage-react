function CardBoard({cardState,setCardState,cardNo}){
return <div className={cardState[cardNo].type + " cardBoard " + cardNo} ><h6>{cardState[cardNo].type}</h6><img src={cardState[cardNo].symbol} alt="card"></img></div>
};

export default CardBoard