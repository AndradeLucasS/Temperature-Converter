let convTemp = {
    c2f: document.getElementById("c2f"),
    c2k: document.getElementById("c2k"),
    f2c: document.getElementById("f2c"),
    f2k: document.getElementById("f2k"),
    k2c: document.getElementById("k2c"),
    k2f: document.getElementById("k2f"),
    c2fRes: document.getElementById("c2fres"),
    c2kRes: document.getElementById("c2kres"),
    f2cRes: document.getElementById("f2cres"),
    f2kRes: document.getElementById("f2kres"),
    k2cRes: document.getElementById("k2cres"),
    k2fRes: document.getElementById("k2fres"),

    genC2F(){
        this.c2fRes.innerHTML = this.c2f.value +  "ºC in fahrenheit degree is " + parseFloat(this.c2f.value*9/5 + 32)+ "ºF";
        if (this.c2f.value.length === 0){
            convTemp.c2fRes.innerHTML = "Insert a Celsius value above to return a Fahrenheit value here";
        }
    },

    genC2K(){
        this.c2kRes.innerHTML = this.c2k.value + "ºC in Kelvin is " + (parseFloat(this.c2k.value) + 273.15) + "K";
        if (this.c2k.value.length === 0){
            convTemp.c2kRes.innerHTML = "Insert a Celsius value above to return a Kelvin value here";
        }
    },

    genF2C(){
        this.f2cRes.innerHTML = this.f2c.value + "ºF in Celsius degree is " + (this.f2c.value - 32)*5/9 + "ºC";
        if (this.f2c.value.length === 0){
            convTemp.f2cRes.innerHTML = "Insert a Fahrenheit value above to return a Celsius value here";
        }
    },

    genF2K(){
        this.f2kRes.innerHTML = this.f2k.value + "ºF in Kelvin is " + parseFloat((this.f2k.value - 32)*5/9 + 273.15) + "K";
        if (this.f2k.value.length === 0){
            convTemp.f2kRes.innerHTML = "Insert a Fahrenheit value above to return a Kelvin value here";
        }
    },

    genK2C(){
        this.k2cRes.innerHTML = this.k2c.value + "K in Celsius degree is " + (this.k2c.value - 273.15) + "ºC";
        if (this.k2c.value.length === 0){
            convTemp.k2cRes.innerHTML = "Insert a Kelvin value above to return a Celsius value here";
        }
    },

    genK2F(){
        this.k2fRes.innerHTML = this.k2f.value + "K in Fahrenheit degree is " + (((this.k2f.value - 273.15)* 9/5)+ 32) + "ºF";
        if (this.k2f.value.length === 0){
            convTemp.k2fRes.innerHTML = "Insert a Kelvin value above to return a Fahrenheit value here";
        }
    }
};