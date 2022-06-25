var symbolsModulePosition
var activeSymbols = []
var column = Math.floor(Math.random() * 6)
var correctSymbolOrder = []
var symbolCounter = 0


var symbolTable = [
    ["balloon", "at", "upsidedowny", "squigglyn", "squidknife", "hookn", "leftc"],
    ["euro", "balloon", "leftc", "cursive", "hollowstar", "hookn", "questionmark"],
    ["copyright", "pumpkin", "cursive", "doublek", "meltedthree", "upsidedowny", "hollowstar"],
    ["six", "paragraph", "bt", "squidknife", "doublek", "questionmark", "smileyface"],
    ["pitchfork", "smileyface", "bt", "rightc", "paragraph", "dragon", "filledstar"],
    ["six", "euro", "tracks", "ae", "pitchfork", "nwithhat", "omega"]]

function symbolsModule(module) {
    symbolsModulePosition = module
    for (let i = 0; i < 4; i++) {
        var currentSymbol = symbolTable[column][Math.floor(Math.random() * 7)];
        if (!activeSymbols.includes(currentSymbol)) {
            activeSymbols.push(currentSymbol)
        }
        else {
            i--
        }
    }
    for (let i = 0; i < 7; i++) {
        if (activeSymbols.includes(symbolTable[column][i])) {
            correctSymbolOrder.push(symbolTable[column][i])
        }
        
    }

    a = -10
    b = 20
    for (let i = 0; i < 4; i++) {
        if (i==2) {
            a=-10
            b=50
        }
        document.getElementById(symbolsModulePosition).innerHTML+=`<div id="${activeSymbols[i]}" onClick="symbolClick(id)" class="symbolBrick"  style="left:${a+=30}%; bottom:${b}%; background-image: url('symbolsModule/symbolImages/${activeSymbols[i]}.png');"></div> `
    }
}
function symbolClick(symbol) {
    if (symbol==correctSymbolOrder[symbolCounter]) {
        document.getElementById(symbol).removeAttribute("onClick")
        symbolCounter++
        document.getElementById(symbol).style.backgroundColor = "green"
        if (symbolCounter==4) {
            document.getElementById(`completed${symbolsModulePosition}`).style.backgroundColor="green"
            modulesDone++
        }
    }
    else{
        document.getElementById(symbol).style.backgroundColor = "red"
        setTimeout(function(){document.getElementById(symbol).style.backgroundColor = "grey"},200);
        strike()
    }
}