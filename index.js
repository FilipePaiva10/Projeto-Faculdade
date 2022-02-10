const server = "https://api.thingspeak.com";

const labelRange = window.document.getElementById("val_range");
const range = window.document.getElementById("range");

const keysAPI = {
    write: "SGUQ7K6F7GYGOPAQ",
    read: "XC2I9Y61ICW0VMV5",
    field: "ligar" // Campo para acender lâmpada
}

range.addEventListener('input', e => updateValue(e));


const updateValue = (e) => {
    labelRange.innerHTML = `Potência 💥: ${e.target.value} W`;
}

const sendAPI = async () => {
    const http = new XMLHttpRequest();
    const url = `${server}/update?api_key=${keysAPI.write}&field1=${range.value}`;
    http.open("GET", url);
    http.send();

    http.onload = console.log(http.responseText + " " + range.value);
}

window.onload = function () {
    setInterval(sendAPI, 500)
}