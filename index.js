const server = "https://api.thingspeak.com";

const keysAPI = {
    write: "SGUQ7K6F7GYGOPAQ",
    read: "XC2I9Y61ICW0VMV5",
    field: "ligar" // Campo para acender lâmpada
}

const sendAPI = async (value) => {
    const http = new XMLHttpRequest();
    const url = `${server}/update?api_key=${keysAPI.write}&${keysAPI.field}=${value}`;

    http.open("GET", url);
    http.send();

    http.onload = console.log(http.responseText + " " + value);
}