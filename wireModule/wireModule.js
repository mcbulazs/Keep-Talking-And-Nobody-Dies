var wires = []
var goodWire
var wireModulePosition
function wiresModule(module) {
    wireModulePosition=module
    var numberOfWires = Math.floor(Math.random() * 4) + 3
    var colors = ["red", "yellow", "white", "black", "blue"]
    for (let i = 0; i < numberOfWires; i++) {
        x = colors[Math.floor(Math.random() * 5)]
        wires.push(x)
    }
    for (let i = 0; i < wires.length; i++) {
        document.getElementById(module).innerHTML += `<div id='wire${i}' class='wires' style='background-color:${wires[i]}' onClick='wireCut(${i})'></div>`
    }
    goodWire = correctWire()
}
function correctWire() {
    var x = false;
    //3 wire
    if (wires.length == 3) {
        var amount=0;
        var position;
        for (let i = 0; i < wires.length; i++) {
            if (wires[i] == "red") {
                x = true
                break;
            }
            else if (wires[i] == "blue") {
                amount++;
                position=i;
            }
        }
        //1st statement
        if (x==false) {
            return 1;
        }
        //2nd statement
        if (wires[2]=="white") {
            return 2;
        }
        //3rd statement
        if (amount>1) {
            return position;
        }
        //4th
        return 2
    }


    //4 wire
    else if (wires.length == 4) {
        var redcounter=0;
        var bluecounter=0
        var yellowcounter=0;
        var position;
        for (let i = 0; i < wires.length; i++) {
            if (wires[i]=="red") {
                redcounter++;
                position=i
            }
            else if(wires[i]=="blue")
            {
                bluecounter++
            }
            else if(wires[i]=="yellow") 
            {
                yellowcounter++;
            }
        }
        //1st statement
        if (redcounter>1&& (serialNumber[serialNumber.length-1]*1)%2!=0) {
            return position
        }
        //2nd statement
        if (redcounter==0&&wires[wires.length-1]=="yellow") {
            return 0
        }
        //3rd statement
        if (bluecounter==1) {
            return 0
        }
        //4th
        if (yellowcounter>1) {
            return 3;
        }
        //5th 
        return 1;
    }
    //5 wire

    else if (wires.length==5) {
        var redcounter = 0
        var yellowcounter =0
        var blackcounter = 0
        for (let i = 0; i < wires.length; i++) {
            if (wires[i]=="red") {
                redcounter++;
            }
            else if(wires[i]=="yellow") 
            {
                yellowcounter++;
            }
            else if(wires[i]=="black") 
            {
                blackcounter++;
            }
        }
        //1st
        if (wires[4]=="black"&& (serialNumber[serialNumber.length-1]*1)%2!=0) {
            return 3
        }
        //2nd
        if (redcounter==1&&yellowcounter>1) {
            return 0
        }
        //3rd
        if(blackcounter==0){
            return 1
        }
        //4th
        return 0

    }
    //6 wire
    else if (wires.length==6){
        var redcounter = 0
        var yellowcounter =0
        var whitecounter = 0
        for (let i = 0; i < wires.length; i++) {
            if (wires[i]=="red") {
                redcounter++;
            }
            else if(wires[i]=="yellow") 
            {
                yellowcounter++;
            }
            else if(wires[i]=="white") 
            {
                whitecounter++;
            }
        }
        //1st
        if (yellowcounter==0 &&  (serialNumber[serialNumber.length-1]*1)%2!=0) {
            return 2
        }
        //2nd
        if (yellowcounter==1&&whitecounter>1) {
            return 3
        }
        //3rd
        if (redcounter==0) {
            return 5
        }
        //4th
        return 3;
    }
}
function wireCut(number) {
    document.getElementById(`wire${number}`).style.border = "10px dotted purple"
    document.getElementById(`wire${number}`).removeAttribute("onClick")
    if (number==goodWire) {
        modulesDone++;
        document.getElementById(`completed${wireModulePosition}`).style.backgroundColor="green"
        
    }
    else{
        strike();
    }
}