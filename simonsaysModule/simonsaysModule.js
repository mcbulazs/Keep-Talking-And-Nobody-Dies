var simonsaysModulePosition
var colorsPossibilities = ["red", "blue", "lightgreen", "yellow"]
var simonColors = []
var goodOrderSimon = []


function simonsaysModule(module) {
    for (let i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
        simonColors.push(colorsPossibilities[Math.floor(Math.random() * 4)])
    }
    simonsaysModulePosition = module
    a = -42
    b = 0
    c = "darkred"
    d = "redSimon"
    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 1:
                b = 42
                a = 0
                c = "darkblue"
                d = "blueSimon"
                break;
            case 2:
                a = 42
                b = 0
                c = "darkgoldenrod"
                d = "yellowSimon"
                break;
            case 3:
                a = 0
                b = -42
                c = "darkgreen"
                d = "lightgreenSimon"
                break;
            default:
                break;
        }
        document.getElementById(simonsaysModulePosition).innerHTML += `<div id="${d}" onClick="simonClick(id)" class="simonBrick" style="background-color:${c};left:${a}% ;bottom:${b}%"></div> `
    }
    console.log(simonColors)
    colorShowing()
    goodOrderSimonFunction()
}

//between beeps 500ms
//between cycles 4000ms
//after completion 2000ms
var currentInMiddleOfGuessing = 0
var currentGuessAmount = 0
var precolor = "red"
var simonInterval
var simonCycleInterval

function colorShowing() {
    simonInterval = setInterval(cycleSimon, 4000 + 500 * currentGuessAmount);
}
function cycleSimon(params) {
    j = 0
    simonCycleInterval = setInterval(() => {
        document.getElementById(`${simonColors[j]}Simon`).style.backgroundColor = simonColors[j]
        timeout = setTimeout(beep, 300, `${simonColors[j]}Simon`)
        j++
        if (j == currentGuessAmount + 1 || j == simonColors.length) {
            clearInterval(simonCycleInterval)
        }
    }, 500);
}

function beep(a) {
    var x = a.replace('Simon', '')
    switch (x) {
        case "lightgreen":
            precolor = "darkgreen"
            break;
        case "red":
            precolor = "darkred"
            break;
        case "yellow":
            precolor = "darkgoldenrod"
            break;
        case "blue":
            precolor = "darkblue"
            break;
        default:
            break;
    }
    document.getElementById(a).style.backgroundColor = precolor
}

var index = 0
var cycleEnd = false
var simonDone = false
var timeTilStrike

function resetSimonTimer() {
    clearInterval(simonCycleInterval)
    clearTimeout(timeTilStrike)
    timeTilStrike = setTimeout(function () {
        if (!cycleEnd) {
            strike()
            goodOrderSimonFunction()
        }
        else {
            index = 0
        }

    }, 1000);
}

function SimonColorChange(id) {
    document.getElementById(id).style.backgroundColor = id.replace('Simon', '')
    timeout = setTimeout(beep, 200, id)
}

function simonClick(id) {
    SimonColorChange(id)
    resetSimonTimer()
    cycleEnd = false
    if (id == `${goodOrderSimon[index]}Simon`) {
        index++
        if (currentGuessAmount+1 == index) {
            cycleEnd = true
        }
        if (index > currentGuessAmount) {
            currentGuessAmount = index
        }
        if (currentGuessAmount == simonColors.length) {
            simonDone = true
            cycleEnd = true
        }
    }
    else {
        cycleEnd = true
        strike()
        goodOrderSimonFunction()
        index = 0
    }

    if (simonDone) {
        clearTimeout(timeout)
        clearTimeout(timeTilStrike)
        clearInterval(simonInterval)
        document.getElementById(`redSimon`).removeAttribute("onClick")
        document.getElementById(`redSimon`).style.backgroundColor = "red"
        document.getElementById(`lightgreenSimon`).removeAttribute("onClick")
        document.getElementById(`lightgreenSimon`).style.backgroundColor = "lightgreen"
        document.getElementById(`yellowSimon`).removeAttribute("onClick")
        document.getElementById(`yellowSimon`).style.backgroundColor = "yellow"
        document.getElementById(`blueSimon`).removeAttribute("onClick")
        document.getElementById(`blueSimon`).style.backgroundColor = "blue"
        document.getElementById(`completed${simonsaysModulePosition}`).style.backgroundColor = "green"
        modulesDone++
    }
}

function goodOrderSimonFunction() {
    goodOrderSimon = []
    for (let i = 0; i < simonColors.length; i++) {
        var x = ""
        if (vowelInSerialNumber) {
            if (currentStrikes == 0) {
                switch (simonColors[i]) {
                    case "red":
                        x = "blue"
                        break;
                    case "blue":
                        x = "red"
                        break;
                    case "lightgreen":
                        x = "yellow"
                        break;
                    case "yellow":
                        x = "lightgreen"
                        break;
                    default:
                        break;
                }
            }
            else if (currentStrikes == 1) {
                switch (simonColors[i]) {
                    case "red":
                        x = "yellow"
                        break;
                    case "blue":
                        x = "lightgreen"
                        break;
                    case "lightgreen":
                        x = "blue"
                        break;
                    case "yellow":
                        x = "red"
                        break;
                    default:
                        break;
                }
            }
            else if (currentStrikes == 2) {
                switch (simonColors[i]) {
                    case "red":
                        x = "lightgreen"
                        break;
                    case "blue":
                        x = "red"
                        break;
                    case "lightgreen":
                        x = "yellow"
                        break;
                    case "yellow":
                        x = "blue"
                        break;
                    default:
                        break;
                }
            }
        }
        else if (!vowelInSerialNumber) {
            if (currentStrikes == 0) {
                switch (simonColors[i]) {
                    case "red":
                        x = "blue"
                        break;
                    case "blue":
                        x = "yellow"
                        break;
                    case "lightgreen":
                        x = "lightgreen"
                        break;
                    case "yellow":
                        x = "red"
                        break;
                    default:
                        break;
                }
            }
            else if (currentStrikes == 1) {
                switch (simonColors[i]) {
                    case "red":
                        x = "red"
                        break;
                    case "blue":
                        x = "blue"
                        break;
                    case "lightgreen":
                        x = "yellow"
                        break;
                    case "yellow":
                        x = "lightgreen"
                        break;
                    default:
                        break;
                }
            }
            else if (currentStrikes == 2) {
                switch (simonColors[i]) {
                    case "red":
                        x = "yellow"
                        break;
                    case "blue":
                        x = "lightgreen"
                        break;
                    case "lightgreen":
                        x = "blue"
                        break;
                    case "yellow":
                        x = "red"
                        break;
                    default:
                        break;
                }
            }
        }
        goodOrderSimon.push(x)
    }
    console.log(goodOrderSimon)
}