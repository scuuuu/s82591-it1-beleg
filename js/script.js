const questions = [
    { 
        "mathe":[
          {"a":"x^2+x^2", "l":["2x^2","x^4","x^8","2x^4"]},
          {"a":"x^2*x^2", "l":["x^4","x^2","2x^2","4x"]},
          {"a":"2+2", "l":["4","2x^2","5","42"]}
          
          ],
        "internettechnologien":[
          {"a":"Welche Authentifizierung bietet HTTP", "l":["Digest Access Authentication","OTP","OAuth","2-Faktor-Authentifizierung"]},
          {"a":"Welches Transportprotokoll eignet sich für zeitkritische Übertragungen", "l":["UDP","TCP","HTTP","Fast Retransmit"]},
          {"a":"Was ist FTP?", "l":["File Transfer Protocol","Free To Play","Functional Threshold Power","Full Tilt Poker"]},
          {"a":"Was bedeutet der 200 Status bei einer Serveranfrage?", "l":["Anfrage erfolgreich","Unbekannter Fehler","Server ist down","Unbekannte Anfrage"]}
           ],
        "allgemein":[
          {"a":"Karl der Große, Geburtsjahr", "l":["747","828","650","1150"]},
          {"a":"In welchem Monat fängt die Prüfungszeit an der HTW im Jahr 2022 an?", "l":["Juli","Juni","August","September"]},
          {"a":"Wie viele Tasten hat ein klassisches Klavier?", "l":["88","78","70","74"]},
          {"a":"Welches Land hat die meisten Inseln in der Welt?", "l":["Schweden","Thailand","Spanien","Griechenland"]}
        ]
    }
];

// Anzahl richtige Antworten
let score = 0;
// Frage
let questionIndex = 0;



const textContainer = document.querySelector("#text");
const buttonContainer = document.querySelector("#button");
const buttonSubmit = document.getElementById("selectButton");
const buttonSubmit1 = document.querySelector('#btn1');
const buttonSubmit2 = document.querySelector('#btn2');
const buttonSubmit3 = document.querySelector('#btn3');
const buttonAnswers = document.querySelector('#btn');


document.getElementsByName("allgemein")[0].onclick = function(){
    clearPage();
    showQuestionAllgemein();
    
}
document.getElementsByName("mathematik")[0].onclick = function(){
    clearPage();
    showQuestionMathe();
}
document.getElementsByName("internettechnologien")[0].onclick = function(){
    clearPage();
    showQuestionInternettechnologien();
}


function clearPage() {
    textContainer.innerHTML = '';
    buttonContainer.innerHTML = '';
}

function showQuestionAllgemein() {

    // Frage
    const textTemplate = `<h3>%frage%</h3>`;
    const frage = textTemplate.replace('%frage%', questions[0]['allgemein'][questionIndex]['a']);
    textContainer.innerHTML = frage;

    // Antworten
    let answerNumber = 1;
    for ([index, answer] of questions[0]['allgemein'][questionIndex]['l'].entries()) {
        const answerTemplate = 
            `<button value="%nummer%" class="btn" id="selectButton" onclick="verifyAnswerAllgemein(value)">%antwort%</button>
                <br>
                <br>`;
        let answerHTML = answerTemplate.replace('%antwort%', answer);
        answerHTML = answerHTML.replace('%nummer%', answerNumber);
        buttonContainer.innerHTML += answerHTML;
        
        answerNumber++;
        


           
                  //do something
         //         for (var i = buttonAnswers.children.length; i >= 0; i--) {
         //           buttonSubmit.appendChild(buttonSubmit.children[Math.random() * i | 0]);
         //       }
             
         

    }

    // for(var i = 0; i < buttonSubmit.children.length; i++){
    //     buttonSubmit.appendChild(buttonSubmit.children[Math.random() * i | 0]);
    // }


}
function showQuestionMathe() {

       // Frage
       const textTemplate = `<h3>%frage%</h3>`;
       const frage = textTemplate.replace('%frage%', questions[0]['mathe'][questionIndex]['a']);
       textContainer.innerHTML = frage;
   
       // Antworten
       let answerNumber = 1;
       for ([index, answer] of questions[0]['mathe'][questionIndex]['l'].entries()) {
           const answerTemplate = 
               `<button value="%nummer%" class="btn" id="selectButton" onclick="verifyAnswerMathe(value)">%antwort%</button>
                   <br>
                   <br>`;
           let answerHTML = answerTemplate.replace('%antwort%', answer);
           answerHTML = answerHTML.replace('%nummer%', answerNumber);
           buttonContainer.innerHTML += answerHTML;
           answerNumber++;
       }

}
function showQuestionInternettechnologien() {

    // Frage
    const textTemplate = `<h3>%frage%</h3>`;
    const frage = textTemplate.replace('%frage%', questions[0]['internettechnologien'][questionIndex]['a']);
    textContainer.innerHTML = frage;

    // Antworten
    let answerNumber = 1;
    for ([index, answer] of questions[0]['internettechnologien'][questionIndex]['l'].entries()) {
        const answerTemplate = 
            `<button value="%nummer%" class="btn" id="selectButton" onclick="verifyAnswerInternettechnologien(value)">%antwort%</button>
                <br>
                <br>`;
        let answerHTML = answerTemplate.replace('%antwort%', answer);
        answerHTML = answerHTML.replace('%nummer%', answerNumber);
        buttonContainer.innerHTML += answerHTML;
        answerNumber++;
    }

}

function showQuestionREST() {

    // // Frage
    // const textTemplate = `<h3>%frage%</h3>`;
    // const frage = textTemplate.replace('%frage%', questions[0]['internettechnologien'][questionIndex]['a']);
    // textContainer.innerHTML = frage;

    // // Antworten
    // let answerNumber = 1;
    // for ([index, answer] of questions[0]['internettechnologien'][questionIndex]['l'].entries()) {
    //     const answerTemplate = 
    //         `<button value="%nummer%" class="btn" id="selectButton" onclick="verifyAnswer(value)">%antwort%</button>
    //             <br>
    //             <br>`;
    //     let answerHTML = answerTemplate.replace('%antwort%', answer);
    //     answerHTML = answerHTML.replace('%nummer%', answerNumber);
    //     buttonContainer.innerHTML += answerHTML;
    //     answerNumber++;
    // }

}


function verifyAnswerAllgemein(value) {

    const clickedAnswer = parseInt(value);

    const rightAnswer = questions[0]['allgemein'][questionIndex]['l'].length - 3;
    console.log(rightAnswer, 'right answer')
    
    if (clickedAnswer === rightAnswer) {
        score++;
       console.log('score', score);
    }

    if (questionIndex !==  questions[0]['allgemein'].length - 1) {

        questionIndex++;
        clearPage();
        showQuestionAllgemein();
    }
    else {

        clearPage();
        showResultAllgemein();
    }
    progress();
}
function verifyAnswerMathe(value) {

    const clickedAnswer = parseInt(value);

    const rightAnswer = questions[0]['mathe'][questionIndex]['l'].length - 3;
    console.log(rightAnswer, 'right answer')
    
    if (clickedAnswer === rightAnswer) {
        score++;
       console.log('score', score);
    }

    if (questionIndex !==  questions[0]['mathe'].length - 1) {

        questionIndex++;
        clearPage();
        showQuestionMathe();
    }
    else {

        clearPage();
        showResultMathe();
    }
}
function verifyAnswerInternettechnologien(value) {

    const clickedAnswer = parseInt(value);

    const rightAnswer = questions[0]['internettechnologien'][questionIndex]['l'].length - 3;
    console.log(rightAnswer, 'right answer')
    
    if (clickedAnswer === rightAnswer) {
        score++;
       console.log('score', score);
    }

    if (questionIndex !==  questions[0]['internettechnologien'].length - 1) {

        questionIndex++;
        clearPage();
        showQuestionInternettechnologien();
    }
    else {

        clearPage();
        showResultMatheInternettechnologien();
    }
}


function showResultAllgemein() {

    console.log("ShowResult")
    console.log(score)
    const resultTemplate =` 
    <div id="text">
            <h3>Glückwunsch!</h3>
            <h4>Du hast %score% von %result% Punkten erreicht!<h4>
            <br>
            <br>
            <button onclick="window.location='index.html';" class="btn">Nochmal spielen</button>
            <butt
        </div>
    `;
    const resultMessage = resultTemplate.replace('%score%', score).replace('%result%', questions[0]['allgemein'].length);
    textContainer.innerHTML = resultMessage;
}

function showResultMathe() {

    console.log("ShowResult")
    console.log(score)
    const resultTemplate =` 
    <div id="text">
            <h3>Glückwunsch!</h3>
            <h4>Du hast %score% von %result% Punkten erreicht!<h4>
            <br>
            <br>
            <button onclick="window.location='index.html';" class="btn">Nochmal spielen</button>
            <butt
        </div>
    `;
    const resultMessage = resultTemplate.replace('%score%', score).replace('%result%', questions[0]['mathe'].length);
    textContainer.innerHTML = resultMessage;
}

function showResultMatheInternettechnologien() {

    console.log("ShowResult")
    console.log(score)
    const resultTemplate =` 
    <div id="text">
            <h3>Glückwunsch!</h3>
            <h4>Du hast %score% von %result% Punkten erreicht!<h4>
            <br>
            <br>
            <button onclick="window.location='index.html';" class="btn">Nochmal spielen</button>
            <butt
        </div>
    `;
    const resultMessage = resultTemplate.replace('%score%', score).replace('%result%', questions[0]['internettechnologien'].length);
    textContainer.innerHTML = resultMessage;
}

function progress() {
	const items = document.querySelectorAll('.item');
	const progress = document.getElementById('progress');
	items.forEach (item => {
		item.onblur = function () {
			progress.value += 25;
			document.getElementById('foo').innerHTML = progress.value + ' %';
		}
	})
};