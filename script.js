function Init() {

    //Groups load
    var select = document.getElementById("groupSelect");
    let i = 0;
    data.forEach(
        function (group) {
            var option = document.createElement("option");

            option.text = group.groupName;
            option.value = i++;
            select.add(option);
        });

    //Groups question load
    var selectQuest = document.getElementById("groupQuestionSelect");
    i = 0;
    dataQuestions.forEach(
        function (groupQuest) {
            var option = document.createElement("option");
            option.text = groupQuest.groupName;
            option.value = i++;
            selectQuest.add(option);
        });
}

let names = [];
function loadNames() {
    let select = document.getElementById("groupSelect");
    names = [];
    let namesCheckboxList = '';
    let i = 0;
    data[select.value].Names.forEach(element => {
        namesCheckboxList += '<label for="nameCheckbox' + i + '"><input type="checkbox" checked id="nameCheckbox' + i + '" value="' + element + '"><button onclick="selectName(\'' + element + '\')">' + element + '</button></label>';
        names.push(element);
        i++;
    });
    document.getElementById('randomNameLabel').innerHTML = 'Random Name:';
    document.getElementById('randomNameButton').disabled = false;
    //document.getElementById('randomNameButton').setAttribute('max', namesList.length);

    document.getElementById('randomNameLabel').innerHTML = '<div id="namesCheckboxList">' + namesCheckboxList + '</div>';
}

function selectName(name) {
    document.getElementById('tableTasks').value += name + '\n';
}

function selectQuestion(question) {
    document.getElementById('tableTasks').value += question + '\n';
}

function clearArea() {
    document.getElementById('tableTasks').value = '';
}


let questions = [];
function loadQuestions() {
    let select = document.getElementById("groupQuestionSelect");
    questions = [];
    let j = 0;
    let questionsCheckboxList = '';
    dataQuestions[select.value].questions.forEach(element => {
        questions.push(element);
        questionsCheckboxList += '<label for="questionCheckbox' + (j) + '"><input type="checkbox" checked id="questionCheckbox' + (j) + '" value="' + element + '"><button onclick="selectQuestion(\'' + element + '\')">' + element + '</button></label>';
        j++;
    })
    document.getElementById('randomQuestionLabel').innerHTML = '<div id="questionsCheckboxList">' + questionsCheckboxList + '</div>';
}





function randomFunction() {
    document.getElementById('randomQuestionLabel').innerHTML = 'Random Question:';
    document.getElementById('randomQuestionButton').disabled = false;
    document.getElementById('randomQuestionButton').setAttribute('max', questionsList.length);

}


//document.getElementById('getListsButton').addEventListener('click', getLists);


document.getElementById('randomNameButton').addEventListener('click', function () {
    var NameCheckboxes = []
    let max = parseInt(names.length)
    for (let i = 0; i < max; i++)
        if (document.getElementById('nameCheckbox' + i).checked)
            NameCheckboxes.push(document.getElementById('nameCheckbox' + i));
    var randomNameIndex = Math.floor(Math.random() * NameCheckboxes.length);
    var randomNameCheckbox = NameCheckboxes[randomNameIndex];
    var randomName = randomNameCheckbox.value;
    randomNameCheckbox.checked = false;

    speak(randomName);

    document.getElementById('randomNameChoice').innerHTML = 'Random Name: ' + randomName;
    var namesCheckboxListDiv = document.getElementById('namesCheckboxList');
    var namesCheckboxes = namesCheckboxListDiv.getElementsByTagName('input');
    document.getElementById('tableTasks').value += randomName + '\n';
});


document.getElementById('randomQuestionButton').addEventListener('click', function () {
    var QuestionCheckboxes = [];
    let max = parseInt(questions.length);
    for (let i = 0; i < max; i++)
        if (document.getElementById('questionCheckbox' + i).checked)
            QuestionCheckboxes.push(document.getElementById('questionCheckbox' + i));
    var randomQuestionIndex = Math.floor(Math.random() * parseInt(QuestionCheckboxes.length));
    var randomQuestionCheckbox = QuestionCheckboxes[randomQuestionIndex];
    randomQuestionCheckbox.checked = false;
    var randomQuestion = randomQuestionCheckbox.value;
    document.getElementById('randomQuestionChoice').innerHTML = 'Random Question: ' + randomQuestion;
    speak(randomQuestion);
    var questionsCheckboxListDiv = document.getElementById('questionsCheckboxList');
    var questionsCheckboxes = questionsCheckboxListDiv.getElementsByTagName('input');
    document.getElementById('tableTasks').value += randomQuestion + '\n';
});

function speak(text) {
    console.log(text)
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU'; // Устанавливаем язык на русский
    speechSynthesis.speak(utterance);
}
