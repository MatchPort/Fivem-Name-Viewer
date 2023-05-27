const codes = {
    "~r~": "#E03232",
    "~b~": "#5DB6E5f",
    "~g~": "#72CC72",
    "~y~": "#F0C850",
    "~p~": "#8466E2",
    "~m~": "#646464",
    "~o~": "#FF8555",
    "~n~": "<br/>",
    "~s~": "reset",
    "~h~": "<b>",
    "~q~": "#CB3694"
}

document.getElementById('previewButton').addEventListener('click', function() {
    let name = document.getElementById('inputName').value;
    let formattedName = "";

    for(let i = 0; i < name.length; i++){
        if(name[i] === "~"){
            let code = name.slice(i, i+3);
            if(code in codes){
                if(codes[code] === "reset"){
                    formattedName += "</span></b>";
                } else if(codes[code] === "<b>"){
                    formattedName += "<b>";
                } else if(codes[code] === "<br/>"){
                    formattedName += "<br/>";
                } else {
                    formattedName += "<span style='color: "+codes[code]+"'>";
                }
                i += 2;
            } else {
                formattedName += name[i];
            }
        } else {
            formattedName += name[i];
        }
    }
    document.getElementById('namePreview').innerHTML = formattedName;
});

document.querySelector('#themeSwitch input').addEventListener('change', function() {
    let body = document.body;
    if(this.checked){
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
});
