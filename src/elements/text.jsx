function Text({textTrue,setText}) {
    const handleClick = event => {textChange(textTrue,setText)};
    if (textTrue.true) {return <p className="text" onClick={handleClick}>{textTrue.text}</p>}
    else {return }
}

function textChange(textTrue,setText){
    const textNew = structuredClone(textTrue)
    textNew.true = false
   return setText(textNew)
}

export default Text