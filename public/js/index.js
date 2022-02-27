import { vueApp } from 'vue'

vueApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        keyDownEvent(event) {
            let keyPressed = event.keyCode || event.which;
            if (keyPressed === 13) {
                event.preventDefault();
                $("#btnSubmit").click();
            }
        },
        checkGuess() {
            let userGuessWord = this.retrieveUserGuessWord();          
            if (!userGuessWord.match('[a-zA-Z]{5}')){
                alertTheUser("Invalid Word");
                return;
            }

            $.ajax({
                type: 'GET',
                url: `/spellcheck/${userGuessWord}`
            })
            .done((msg) => {
                //console.log(msg);
                validWord = msg.isSpelledCorrectly;
                if(validWord){
                    giveWordFeedback(msg.disectedArray);
                    if(checkWinner(msg.disectedArray)) {
                        alertTheUser("Congrats!! You Won");
                        disableWinningRow();
                        return;
                    }
                    moveToNextWord(msg.generatedGuessWord);
                }
                else {
                    alertTheUser("Word not found in dictionary");
                }      
            })
            .fail((msg) => {
                console.log(msg);
            });
        },
        retrieveUserGuessWord() {
            let userGuessWord = '';
            switch(this.count) {
                case 0:
                    var charOne = $('#OneOne').val();
                    var charTwo = $('#OneTwo').val();
                    var charThree = $('#OneThree').val();
                    var charFour = $('#OneFour').val();
                    var charFive = $('#OneFive').val();
                    userGuessWord = charOne + charTwo + charThree + charFour + charFive;
                    break;
                case 1:
                    var charOne = $('#TwoOne').val();
                    var charTwo = $('#TwoTwo').val();
                    var charThree = $('#TwoThree').val();
                    var charFour = $('#TwoFour').val();
                    var charFive = $('#TwoFive').val();
                    userGuessWord = charOne + charTwo + charThree + charFour + charFive;
                    break;
                case 2:
                    var charOne = $('#ThreeOne').val();
                    var charTwo = $('#ThreeTwo').val();
                    var charThree = $('#ThreeThree').val();
                    var charFour = $('#ThreeFour').val();
                    var charFive = $('#ThreeFive').val();
                    userGuessWord = charOne + charTwo + charThree + charFour + charFive;
                    break;
                case 3:
                    var charOne = $('#FourOne').val();
                    var charTwo = $('#FourTwo').val();
                    var charThree = $('#FourThree').val();
                    var charFour = $('#FourFour').val();
                    var charFive = $('#FourFive').val();
                    userGuessWord = charOne + charTwo + charThree + charFour + charFive;
                    break;
                case 4:
                    var charOne = $('#FiveOne').val();
                    var charTwo = $('#FiveTwo').val();
                    var charThree = $('#FiveThree').val();
                    var charFour = $('#FiveFour').val();
                    var charFive = $('#FiveFive').val();
                    userGuessWord = charOne + charTwo + charThree + charFour + charFive;
                    break;
                case 5:
                    var charOne = $('#SixOne').val();
                    var charTwo = $('#SixTwo').val();
                    var charThree = $('#SixThree').val();
                    var charFour = $('#SixFour').val();
                    var charFive = $('#SixFive').val();
                    userGuessWord = charOne + charTwo + charThree + charFour + charFive;
                    break;
                default:
            }
            return userGuessWord.toLowerCase();
        },
        giveWordFeedback(disectedArray) {
            switch(this.count) {
                case 0:
                    $.each(disectedArray, (index, value) => {
                        switch(index) {
                            case 0:
                                addCSSClass('#OneOne', value);
                                break;
                            case 1:
                                addCSSClass('#OneTwo', value);
                                break;
                            case 2:
                                addCSSClass('#OneThree', value);
                                break;
                            case 3:
                                addCSSClass('#OneFour', value);
                                break;
                            case 4:
                                addCSSClass('#OneFive', value);
                                break;
                            default:
                                alert('In giveWordFeedBack case 0 Switch Statement Default');
                        }
                    });
                    break;
                case 1:
                    $.each(disectedArray, (index, value) => {
                            switch(index) {
                                case 0:
                                    addCSSClass('#TwoOne', value);
                                    break;
                                case 1:
                                    addCSSClass('#TwoTwo', value);
                                    break;
                                case 2:
                                    addCSSClass('#TwoThree', value);
                                    break;
                                case 3:
                                    addCSSClass('#TwoFour', value);
                                    break;
                                case 4:
                                    addCSSClass('#TwoFive', value);
                                    break;
                                default:
                                    alert('In giveWordFeedBack case 1 Switch Statement Default');
                            }
                        });
                    break;
                case 2:
                    $.each(disectedArray, (index, value) => {
                            switch(index) {
                                case 0:
                                    addCSSClass('#ThreeOne', value);
                                    break;
                                case 1:
                                    addCSSClass('#ThreeTwo', value);
                                    break;
                                case 2:
                                    addCSSClass('#ThreeThree', value);
                                    break;
                                case 3:
                                    addCSSClass('#ThreeFour', value);
                                    break;
                                case 4:
                                    addCSSClass('#ThreeFive', value);
                                    break;
                                default:
                                    alert('In giveWordFeedBack case 2 Switch Statement Default');
                            }
                        });
                    break;
                case 3:
                    $.each(disectedArray, (index, value) => {
                            switch(index) {
                                case 0:
                                    addCSSClass('#FourOne', value);
                                    break;
                                case 1:
                                    addCSSClass('#FourTwo', value);
                                    break;
                                case 2:
                                    addCSSClass('#FourThree', value);
                                    break;
                                case 3:
                                    addCSSClass('#FourFour', value);
                                    break;
                                case 4:
                                    addCSSClass('#FourFive', value);
                                    break;
                                default:
                                    alert('In giveWordFeedBack case 3 Switch Statement Default');
                            }
                        });
                    break;
                case 4:
                    $.each(disectedArray, (index, value) => {
                            switch(index) {
                                case 0:
                                    addCSSClass('#FiveOne', value);
                                    break;
                                case 1:
                                    addCSSClass('#FiveTwo', value);
                                    break;
                                case 2:
                                    addCSSClass('#FiveThree', value);
                                    break;
                                case 3:
                                    addCSSClass('#FiveFour', value);
                                    break;
                                case 4:
                                    addCSSClass('#FiveFive', value);
                                    break;
                                default:
                                    alert('In giveWordFeedBack case 4 Switch Statement Default');
                            }
                        });
                    break;
                case 5:
                    $.each(disectedArray, (index, value) => {
                            switch(index) {
                                case 0:
                                    addCSSClass('#SixOne', value);
                                    break;
                                case 1:
                                    addCSSClass('#SixTwo', value);
                                    break;
                                case 2:
                                    addCSSClass('#SixThree', value);
                                    break;
                                case 3:
                                    addCSSClass('#SixFour', value);
                                    break;
                                case 4:
                                    addCSSClass('#SixFive', value);
                                    break;
                                default:
                                    alert('In giveWordFeedBack case 5 Switch Statement Default');
                            }
                        });
                    break;
                default:
                    alert('In giveWordFeedBack Switch Statement Default');
            }
        },
        addCSSClass(inputId, value){
            // Value has 3 options
            // 1: Letter does not exist in word
            // 2: Letter does exist in word and is in the correct spot
            // 3: Letter does exist in word but is not in the correct spot
            if (value === '1')
                $(inputId).addClass("incorrectLetter");
            else if (value === '2')
                $(inputId).addClass("fullCorrectLetter");
            else
                $(inputId).addClass("halfCorrectLetter");
        
        },
        checkWinner(disectedArray) {
            let numOfCorrectLetters = 0;
            $.each(disectedArray, (index, value) => {
                if(value === '2') {
                    numOfCorrectLetters++;
                }
            });
    
            return numOfCorrectLetters === 5 ? true : false;
        },
        moveToNextWord(generatedGuessWord) {
            switch(this.count) {
                case 0:
                    $('.inRowOne').prop('disabled', true);
                    $('.inRowTwo').prop('disabled', false);
                    break;
                case 1:
                    $('.inRowTwo').prop('disabled', true);
                    $('.inRowThree').prop('disabled', false);
                    break;
                case 2:
                    $('.inRowThree').prop('disabled', true);
                    $('.inRowFour').prop('disabled', false);
                    break;
                case 3:    
                    $('.inRowFour').prop('disabled', true);
                    $('.inRowFive').prop('disabled', false);
                    break;
                case 4:
                    $('.inRowFive').prop('disabled', true);
                    $('.inRowSix').prop('disabled', false);
                    break;
                case 5:
                    // The Game is finished
                    $('.inRowSix').prop('disabled', true);
                    alertTheUser(`Correct word was ${generatedGuessWord}`);
                    break;
                default:
                    alert('moveToNextWord Switch Statement Default');
            }
            this.count++;
        },
        disableWinningRow() {
            switch(this.count) {
                case 0:
                    $('.inRowOne').prop('disabled', true);
                    break;
                case 1:
                    $('.inRowTwo').prop('disabled', true);
                    break;
                case 2:
                    $('.inRowThree').prop('disabled', true);
                    break;
                case 3:    
                    $('.inRowFour').prop('disabled', true);
                    break;
                case 4:
                    $('.inRowFive').prop('disabled', true);
                    break;
                case 5:
                    $('.inRowSix').prop('disabled', true);
                    break;
                default:
                    alert('disableWinningRow Switch Statement Default');
            }
        },
        alertTheUser(alertMsg) {
            let span = $('#alertUser')[0];
            span.innerHTML = alertMsg;
            span.style["display"] = "block";
            
            setTimeout(() => {
                span.style["display"] = "none";    
            }, 3000);
        }
    },
    mounted() {
        var that = this;
        $('#directionsModal').modal('show');

        $("#OneFive").on("keydown", (event) => {
            that.keyDownEvent(event);
        });
        $("#TwoFive").on("keydown", (event) => {
            that.keyDownEvent(event);
        });
        $("#ThreeFive").on("keydown", (event) => {
            that.keyDownEvent(event);
        });
        $("#FourFive").on("keydown", (event) => {
            that.keyDownEvent(event);
        });
        $("#FiveFive").on("keydown", (event) => {
            that.keyDownEvent(event);
        });
        $("#SixFive").on("keydown", (event) => {
            that.keyDownEvent(event);
        });
    }
}).mount('#vueApp')