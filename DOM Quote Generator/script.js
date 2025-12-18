//const varName = document.getElementById('elementId');

//const varName = document.querySelectorAll('elementId');

//const varName = document.querySelector('cssSelector');

//const varName = document.createElement('elementName');

const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [{
    quote: `I give the most honest effort I know how - the strongest effort I can; and I plan to keep moving forward until end."`,
    person: `John David`
}, {
    quote: `"I try to live the best way I understand - the best way I am able; and I choose to continue that path until the end."`,
    person: `John Legend`
}, {
    quote: `"I follow the highest purpose I know how - the highest purpose I can; and I will keep believing in it until the end."`,
    person: `Alfred William`
}, {
    quote: `"I offer the truest work I know how - the truest work I can; and I intend to carry it onward until the end."`,
    person: `Albert Hero`
}, {
    quote: `"I stand by the deepest values I know how - the deepest values I can; and I aim to honor them until the end."`,
    person: `Olden Diaz`
}, {
    quote: `"I walk the hardest road I know how - the hardest road I can; and I promise to stay on it until the end."`,
    person: `Alfred Ordy`
}, {
    quote: `"I speak with the clearest truth I know how - the clearest truth I can; and I will hold to it until the end."`,
    person: `Pedro Inn`
}, {
    quote: `"I build the strongest life I know how - the strongest life I can; and I mean to protect it until the end."`,
    person: `Hanz Gein`
}, {
    quote: `"I give my full heart in all I know how - in all that I truly can; and I will keep giving it until the end."`,
    person: `Hanzo Yu`
}, {
    quote: `"I rise with the greatest courage I know how - the greatest courage I can; and I plan to stand firm until the end."`,
    person: `Amiel Faith`
}]

btn.addEventListener('click', function (){

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person; 

})
