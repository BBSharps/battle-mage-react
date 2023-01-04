function Text({textTrue,setText}) {
    const handleClick = event => {textChange(textTrue,setText)};
    if (textTrue.true) {return <pre className="text" onClick={handleClick}>{textTrue.text}</pre>}
    else {return }
}

function textChange(textTrue,setText){
    const textNew = structuredClone(textTrue)
    textNew.true = false
   return setText(textNew)
}

export default Text