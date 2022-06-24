var buttonProperties = []
var buttonModulePosition
function buttonModule(module) {
    buttonModulePosition=module
    var text = ["Abort", "Detonate", "Hold", "Press"]
    var buttonColor = ["red", "yellow", "white", "blue"]
    var stripColor = ["red", "yellow", "white", "black", "blue"]
    buttonProperties.push(text[Math.floor(Math.random() * 4)])
    buttonProperties.push(buttonColor[Math.floor(Math.random() * 4)])
    buttonProperties.push(stripColor[Math.floor(Math.random() * 5)])
    document.getElementById(buttonModulePosition).innerHTML += `<div id="button" onmouseup="buttonReleased()" onmousedown="buttonPressed()" style="background-color:${buttonProperties[1]};">
    <h1>${buttonProperties[0]}</h1></div>
    <div id="buttonStripe">
    </div>`
}



var fail = false
function buttonPressed() {
    document.getElementById("buttonStripe").style.backgroundColor = buttonProperties[2]
    if ((numberOfBatteries > 1 && buttonProperties[0] == "Detonate") || (numberOfBatteries > 2 && litIndicators.includes("FRK"))||(buttonProperties[1]=="red"&&buttonProperties[0]=="Hold")) {
        timeOut = setTimeout(function () {
            strike()
            fail = true
        }, 1000)
    }
}
function stripeCorrect() {
    bool = false
    if (buttonProperties[2] == "blue" && (minutes == 4 || seconds % 10 == 4 || Math.floor(seconds / 10) == 4)) {
        bool = true;
    }
    else if (buttonProperties[2] == "yellow" && (minutes == 5 || seconds % 10 == 5 || Math.floor(seconds / 10) == 5)) {
        bool = true;
    }
    else if (minutes == 1 || seconds % 10 == 1 || Math.floor(seconds / 10) == 1) {
        bool = true;
    }
    else {
        bool = false;
    }



    if (bool = true) {
        buttonModuleCompleted()
    }
    else {
        strike()
    }
}
function buttonReleased() {
    document.getElementById("buttonStripe").style.backgroundColor = "darkgrey"
    //1st
    if (buttonProperties[1] == "blue" && buttonProperties[0] == "Abort") {
        stripeCorrect()
    }
    //2nd
    else if (numberOfBatteries > 1 && buttonProperties[0] == "Detonate") {
        clearTimeout(timeOut)
        if (fail == false) {
            buttonModuleCompleted()
        }
        fail = false
    }
    //3rd
    else if (buttonProperties[1] == "white" && litIndicators.includes("CAR")) {
        stripeCorrect()
    }
    //4th
    else if (numberOfBatteries > 2 && litIndicators.includes("FRK")) {
        clearTimeout(timeOut)
        if (fail == false) {
            buttonModuleCompleted()
        }
        fail = false
    }
    //5th
    else if (buttonProperties[1] == "yellow") {
        stripeCorrect()
    }
    //6th
    else if(buttonProperties[1]=="red"&&buttonProperties[0]=="Hold"){
        clearTimeout(timeOut)
        if (fail == false) {
            buttonModuleCompleted()
        }
        fail = false
    }
    //7th
    else{
        stripeCorrect()
    }

}
function buttonModuleCompleted() {
    document.getElementById(`completed${buttonModulePosition}`).style.backgroundColor="green"
}