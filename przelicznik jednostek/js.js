var input = document.getElementById("input");
var output = document.getElementById("output");
var transferFromEle = document.getElementById("transferFrom");
var transferToEle = document.getElementById("transferTo");


input.addEventListener("input", myFunc);
transferFromEle.addEventListener("input", myFunc);
transferToEle.addEventListener("input", myFunc);


function myFunc(){
  var transferFromVal = transferFromEle.value;
    console.log("transferFromVal= " + transferFromVal);
  var transferToVal = transferToEle.value;
    console.log("transferToVal= " + transferToVal);
  
  var units = {
    mm: 1000,
    cm: 100,
    m: 1,
    dm: 10,
    km: 0.001,
    ft: 3.280839895,
    yd: 1.0936132983,
    in: 39.3700787402   //cal
  };
  
   
  //solution: divide output unit by input unit
  output.textContent = Math.round((input.value * (units[transferToVal] / units[transferFromVal]))*100)/100;
}