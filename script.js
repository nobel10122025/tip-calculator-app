var billAmount = parseFloat(document.getElementById("bill").value) 
var tipbuttons = document.getElementsByClassName("button-item")
var noOfPersons = parseInt(document.getElementById("number").value)
function show_bill(){
    billAmount = parseFloat(document.getElementById("bill").value)
    //console.log(billAmount)
    return billAmount
}

var buttonValue;
for (let i=0;i<tipbuttons.length;i++){
    var button=tipbuttons[i]
    button.addEventListener('click',function(event){
        //console.log(parseInt(event.target.value))
        buttonValue= parseInt(event.target.value)
        if(isNaN(buttonValue)){
            //console.log(button)
            button.type = "text";
            button.placeholder = "0";
            button.value="";
            buttonValue = show_percent();
            //console.log(buttonValue)
        }
    })
}
function show_percent(){
    buttonValue=parseInt(button.value)
}
function show_number(){
var noOfPersons = parseInt(document.getElementById("number").value)
//console.log(noOfPersons)
return noOfPersons
}
function final(){
    var bill = show_bill()
    var tip = buttonValue
    var number = show_number()

    var total = (bill * (tip/100))
    total = total.toFixed(2)
    //console.log(total)
    document.getElementById("billAmount").innerText = "$" + total.toString();
    var totalbill = total*number;
    totalbill=totalbill.toFixed(2)
    document.getElementById("totalAmount").innerText = "$" + totalbill.toString();
}

document.addEventListener("keypress",function(e){
    if (e.key === 'Enter') {
        //console.log("hello")
        var numberofperson = show_number()
        
        if(isNaN(numberofperson))
        {
            document.getElementById("number").style.borderColor="red";
            var warningMessage=document.getElementsByClassName("warning")
            for(let i=0;i<warningMessage.length;i++)
            {
            warningMessage[i].classList.add("show")
            }
        }
        else
        {
            document.getElementById("number").style.borderColor="hsl(172, 67%, 45%)";
            var warningMessage=document.getElementsByClassName("warning")
            for(let i=0;i<warningMessage.length;i++){
            warningMessage[i].classList.remove("show")
            }
        final()        
        }   
    }
})
function reset(){
    document.getElementById("bill").value = ""
    document.getElementById("number").value = ""
    document.getElementById("billAmount").innerText = "$0.00";
    document.getElementById("totalAmount").innerText = "$0.00";
    var customButton=document.getElementById("button");
    customButton.type="button";
    customButton.value="Custom";
}