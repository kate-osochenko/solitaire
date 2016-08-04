/**
 * Created by user on 2/11/16.
 */
var suitCards = ["hearts", "clubs", "spades", "diamonds"];

var numberCards = ["ace", "two",  "three", "four", "five", "six",  "seven",  "eight", "nine", "ten", "jack", "queen", "king"];

var deck = [];

var mainDeck = {
    cards: [],
    maxCapacity: 24
};

var place1 = {
    cards: [],
    maxCapacity: 1
};

function init() {
    for (var i = 0; i < suitCards.length; i++) {
        for (var j = 0; j < numberCards.length; j++) {
            var card = {
                suit: {
                    name: suitCards[i],
                    position: i
                },
                number: {
                    name: numberCards[j],
                    position: j
                }
            };
            deck.push(card);
        }
    }
    generateCards();
}

function generateCards() {
    var newDeck = deck.clone();
    var game = [mainDeck, place1];
    var random = getRandom(game.length);

}

function generateCardsTest() {
    //for (var k = 0; k < deck.length; k++) {
        $("#cards").append(buildOneCard(deck[5]));
    //}
}

function generateDeckopen() {
    $("#cards").append(buildOneCard(deck[5]));

}

function buildOneCard(card) {
    var y = -142 * card.suit.position;
    var x = -100 * card.number.position;
    return "<div class='card' style='background-position: " + x + "px " + y + "px'><!--" + card.number.name + " of " + card.suit.name + "--></div>";
}

Array.prototype.clone = function() {
    return this.slice(0);
};