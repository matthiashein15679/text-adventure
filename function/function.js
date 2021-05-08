let moderator = 1;
let moderator_count = 0;
let gamer = 0;
let nameGamer = "Gamer";

let gamer_text = new Array;

let moderator_text = [
    'Hallo Fremder',                                // Case 1
    'Wie ist dein Name?',                           // Case 2
    'Danke, ich habe deinen Namen gespeichert.',    // Case 3
    'Möchtest du ein Spiel mit mir spielen?',       // Case 4
    'Ok, dann spielen wir jetzt ein Spiel:',        // Case 5
    'Zuerst musst du eine Aufgabe lösen.',          // Case 6
    '...',                                          // Case 7
    'Was ist 2 + 2?',                               // Case 8
    'Ok du bist raus, geh nach Hause!',             // Case 9
    'Gut, du bist schon mal kein Roboter',          // Case 10
    'Zunächst muss ich dir eine kleine Geschichte erzählen'           // Case 11            
]

let end = moderator_text.length;



function messageSend(){
    text = document.getElementById("text-input").value;
    gamer_text.push(text);
    document.getElementById("text-field").innerHTML += "<pre>" + nameGamer + ":     " + text + "</pre>";
    document.getElementById("text-input").value = '';
    moderator = 1;
    gamer = 0;
    switch (moderator_count) {
        case 2:
            nameGamer = text;
            document.getElementById("spielername").innerHTML = nameGamer;
            break;
        case 4:
            if (text == 'nein'){
                moderator_count = 99;
            }
            break;
        case 8:
            if (text == "4") {
                moderator_count = 9;
            } else {
                moderator_count = 8;
            }
            break;
    }
    let textObj = document.getElementById("text-field");
    textObj.scrollTop = textObj.scrollHeight;
}

setInterval(next,3000);

function next() {
    if (moderator == 1 && end > moderator_count) {
        document.getElementById("text-field").innerHTML += "<pre>Moderator: " + moderator_text[moderator_count] + "</pre>";
        moderator_count += 1;
        moderator = 0;
        gamer = 1;
        switch (moderator_count) {
            case 3:
            case 5:
            case 6:
            case 7:
            case 10:
                moderator = 1;
                gamer = 0;
                break;
        }
    } 
}







