import CardBoard from "./board-card" 

function BoardWindow({cardBoardState}) {
    
    return<div className="boardWindow">
    <CardBoard cardState={cardBoardState} cardNo="spellPlay"/>
    <CardBoard cardState={cardBoardState} cardNo="aiPlay1"/>
    <CardBoard cardState={cardBoardState} cardNo="aiPlay2"/>
    <CardBoard cardState={cardBoardState} cardNo="aiPlay3"/>
    <CardBoard cardState={cardBoardState} cardNo="plPlay1"/>
    <CardBoard cardState={cardBoardState} cardNo="plPlay2"/>
    <CardBoard cardState={cardBoardState} cardNo="plPlay3"/>
    </div>
}

export default BoardWindow
