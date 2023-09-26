document.addEventListener("DOMContentLoaded", function () {
    var wordList = document.getElementById("wordList");
    var searchInput = document.getElementById("searchInput");
    var showDefinitionButton = document.getElementById("showDefinitionButton");
    var definitionText = document.getElementById("definition");


    var dictionary = {
        'Arbol': 'Definición de Arbol...',
        'Burbuja': 'Definición de Burbuja...',
        'Calabaza': 'Definición de Calabaza...',
      
    };

    for (var word in dictionary) {
        wordList.options[wordList.options.length] = new Option(word);
    }


    wordList.addEventListener("dblclick", function () {
        var selectedWord = wordList.value;
        var definition = dictionary[selectedWord];

        if (definition) {
            definitionText.textContent = definition;
        } else {
            definitionText.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    showDefinitionButton.addEventListener("click", function () {
        var selectedWord = wordList.value;
        var definition = dictionary[selectedWord];

        if (definition) {
            definitionText.textContent = definition;
        } else {
            definitionText.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    searchInput.addEventListener("keyup", function () {
        var searchText = searchInput.value.trim().toLowerCase();

        wordList.options.length = 0; 

        if (searchText === "") {
            for (var word in dictionary) {
                wordList.options[wordList.options.length] = new Option(word);
            }
        } else {
            for (var word in dictionary) {
                if (word.toLowerCase().includes(searchText)) {
                    wordList.options[wordList.options.length] = new Option(word);
                }
            }
        }
    });
});
