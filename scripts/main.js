function giveC2Fres(){
    var C2F = document.getElementById("c2f");
    var valueC2F = C2F.value;
    document.getElementById("c2fres").innerHTML = valueC2F + "ºC in fahrenheit degree is " + parseFloat(valueC2F*9/5 + 32)+ "ºF";
    console.log(valueC2F*9/5);
    if (valueC2F.length === 0){
        document.getElementById("c2fres").innerHTML = "Insert a Celsius value above to return a Fahrenheit value here";
    }
}

function giveC2Kres(){
    var C2K = document.getElementById("c2k");
    var valueC2K = parseFloat(C2K.value);
    document.getElementById("c2kres").innerHTML = valueC2K + "ºC in Kelvin is " + (valueC2K + 273.15) + "K";
    if (C2K.value.length === 0){
        document.getElementById("c2kres").innerHTML = "Insert a Celsius value above to return a Kelvin value here";
    }
}

function giveF2Cres(){
    var F2C = document.getElementById("f2c");
    var valueF2C = F2C.value;
    document.getElementById("f2cres").innerHTML = valueF2C + "ºF in Celsius degree is " + (valueF2C - 32)*5/9 + "ºC";
    if (valueF2C.length === 0){
        document.getElementById("f2cres").innerHTML = "Insert a Fahrenheit value above to return a Celsius value here";
    }
}

function giveF2Kres(){
    var F2K = document.getElementById("f2k");
    var valueF2K = parseFloat(F2K.value);
    document.getElementById("f2kres").innerHTML = valueF2K + "ºF in Kelvin is " + parseFloat((valueF2K - 32)*5/9 + 273.15) + "K";
    if (F2K.value.length === 0){
        document.getElementById("f2kres").innerHTML = "Insert a Fahrenheit value above to return a Kelvin value here";
    }
}

function giveK2Cres(){
    var K2C = document.getElementById("k2c");
    var valueK2C = K2C.value;
    document.getElementById("k2cres").innerHTML = valueK2C + "K in Celsius degree is " + (valueK2C - 273.15) + "ºC";
    if (valueK2C.length === 0){
        document.getElementById("k2cres").innerHTML = "Insert a Kelvin value to return a Celsius value here";
    }
}

function giveK2Fres(){
    var K2F = document.getElementById("k2f");
    var valueK2F = K2F.value;
    document.getElementById("k2fres").innerHTML = valueK2F + "K in Fahrenheit degree is " + (((valueK2F - 273.15)* 9/5)+ 32) + "ºF";
    if (valueK2F.length === 0){
        document.getElementById("k2fres").innerHTML = "Insert a Kelvin value to return a Fahrenheit value here";
    }
}
