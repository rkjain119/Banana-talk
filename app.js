var inputTranslateText = document.querySelector("#input-txt");
var outputTranslateText = document.querySelector("#output-txt");

var btnTranslator = document.querySelector("#btn-tlate");
btnTranslator.addEventListener("click", btnClick);

var server = "https://api.funtranslations.com/translate/minion.json";

function btnClick(e) {
    var input = inputTranslateText.value;
    var finalURL = constructURL(input);

    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            outputTranslateText.innerText = json.contents.translated;
        })
        .catch(() => alert("Server Error Please Try After Sometime"))
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${server}? text=${encodedURI}`;
}