const emojisRange = [129380, 129452]

function emojisArr(nr){
    let emojis = [];
    for(let i = emojisRange[0]; i< emojisRange[1]; i++){
        emojis.push(String.fromCodePoint(i))

    }
    emojis.sort(()=>Math.random()-0.5)
    return emojis.splice(0,nr)
}