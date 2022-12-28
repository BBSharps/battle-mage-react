function CardBoard({cardState,setCardState,cardNo}){
    
return <div className={cardState[cardNo].type + " cardBoard " + cardNo} ><h6>{cardState[cardNo].type}</h6></div>
};

export default CardBoard