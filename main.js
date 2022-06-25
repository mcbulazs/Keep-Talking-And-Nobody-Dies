var modulesDone =0
var numberOfBatteries
var serialNumber
var vowels = ["A","E","U","I","O"]
var vowelInSerialNumber = false
var litIndicators = []
function loaded() {
    //serial number
    document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
    var serialNumberPossiblities = ["AL5QF2", "MV6SP3", "TR9SF6", "AG6EC7"]
    serialNumber = serialNumberPossiblities[Math.floor(Math.random() * 4)]
    document.getElementById("serialNumber").innerText = "S/N: " + serialNumber

    for (let i = 0; i < serialNumber.length; i++) {
        for (let j = 0; j <vowels.length; j++) {
           if (serialNumber[i]==vowels[j]) {
            vowelInSerialNumber = true    
            break
           }
        }
        if (vowelInSerialNumber) {
            break
        }
    }
    console.log("is there a vowel: "+vowelInSerialNumber)


    //batteries
    numberOfBatteries=(Math.floor(Math.random() * 4) + 1)
    document.getElementById("batteries").innerText = "Number of batteries: " + numberOfBatteries
    //indicators
    var allIndicators=["SND","CLR","CAR","IND","FRQ","SIG","NSA","MSA","TRN","BOB","FRK"]
    var indicators = []
    var random = Math.floor(Math.random()*5)+1
    for (let i = 0; i <random; i++) {
        var x = allIndicators[Math.floor(Math.random() * 11)]
        if (!indicators.includes(x)) {
            indicators.push(x)
            if (Math.floor(Math.random()*2)==0) {
                litIndicators.push(x)
            }
        }
    }
    for (let i = 0; i < indicators.length; i++) {
     
        if (litIndicators.includes(indicators[i])) {
            document.getElementById("indicators").innerHTML+=`<h3 style="color:white">\n${indicators[i]}</h3>`
        }
        else{
            document.getElementById("indicators").innerHTML+=`<h3>${indicators[i]}</h3>`
        }
    }
    //other
    startTimer();
    wiresModule("bottomCenter")
    buttonModule("bottomRight")
    symbolsModule("topCenter")
    simonsaysModule("topRight")
}


