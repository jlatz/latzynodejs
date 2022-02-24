const express = require('express');
const path = require('path');
const Typo = require('typo-js');
const fs = require('fs');


var dictionaryUS = new Typo("en_US");


const app = express();
app.use(express.static(__dirname + '/public'));

var wordToGuess = '';
app.get('/', (req, res) => {
    var fiveLetterWords = [];
    try {
        fiveLetterWords = fs.readFileSync('public/fiveletterwordsalphabetical.txt', 'utf-8').split("\n");
    } catch (err) {
        console.error(err);
    }

    wordToGuess = fiveLetterWords[Math.floor(Math.random()*fiveLetterWords.length)];
    console.log(wordToGuess);

    res.status(200).sendFile(path.join(__dirname, "public/html/index.html"));
});

app.get('/spellcheck/:guessWord', (req, res) => {
    const {guessWord} = req.params;
    //console.log(`GuessWord ${guessWord}`);
    var isSpelledCorrectly = dictionaryUS.check(guessWord);

    // 3 options for each letter
        // 1, letter does not exist in word at all
        // 2, letter does exist in word and is in the correct spot
        // 3, letter does exist in word but not in correct spot
    var disectArray = [];
    if (isSpelledCorrectly) {
        
        let wordToGuessArr = wordToGuess.split("");
        let userGuessWordArr = guessWord.split("");

        for(let index = 0; index < userGuessWordArr.length; index++) { 
            let positionOfLetter = wordToGuessArr.indexOf(userGuessWordArr[index]);
            if (positionOfLetter === -1){
                // letter was not found
                disectArray[index] = "1";
            }
            else {
                // letter was found. Now we have to find out if its in the correct spot or not
                if (positionOfLetter === index) {
                    // letter exists in word and is in the correct spot
                    disectArray[index] = "2";
                } 
                else {
                    // letter exists in word but is not in the correct spot
                    // in the case of words that have double the same letters, check that the second double letter is in the correct spot
                    if (userGuessWordArr[index] === wordToGuessArr[index])
                        disectArray[index] = "2";
                    else
                        disectArray[index] = "3";
                }
            }
        }    
    }
    var response = {
        "generatedGuessWord": wordToGuess,
        "isSpelledCorrectly": isSpelledCorrectly,
        "disectedArray": disectArray
    }

    res.status(200).send(response);
});

app.listen(3000, () => console.log('listening on port 3000...'));