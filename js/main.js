var quotes = [
    {
        text: 'Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.',
        author: 'Bernard M. Baruch'
    },
    {
        text: 'It is better to be hated for what you are than to be loved for what you are not.',
        author: 'Andre Gide'
    },
    {
        text: 'To live is the rarest thing in the world. Most people exist, that is all.',
        author: 'Oscar Wilde'
    },
    {
        text: 'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.',
        author: 'Voltaire'
    },
    {
        text: 'Focus more on your desire than on your doubt, and the dream will take care of itself.',
        author: 'Mark Twain'
    },
    {
        text: 'The most common way people give up their power is by thinking they do not have any.',
        author: 'Alice Walker'
    }
];

var lastQoute;
var Btn = document.getElementById("btn");
Btn.addEventListener("click", function(){
    var random;
    do{
        random = Math.floor(Math.random()*quotes.length);
    }while(random === lastQoute)
    lastQoute = random
    var displayQoutes = quotes[random];
    document.getElementById("demo").innerHTML = `
        <h1 class="pt-4 px-4">${displayQoutes.text}</h1>
        <p class="fs-4 mt-2 pb-5">--${displayQoutes.author}</p>
    `;;
    return
})

