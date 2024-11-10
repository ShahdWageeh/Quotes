var quotes = [
    '<h1 class="pt-4 px-4">Be who you are and say what you feel, because those who mind donot matter, and those who matter donot mind.</h1><p class="fs-4 mt-2 pb-5">--Bernard M. Baruch</p>',
    '<h1 class="pt-4 px-4">It is better to be hated for what you are than to be loved for what you are not.</h1><p class="fs-4 mt-2 pb-5">--Andre Gide</p>',
    '<h1 class="pt-4 px-4">To live is the rarest thing in the world. Most people exist, that is all.</h1><p class="fs-4 mt-2 pb-5">--Oscar Wilde</p>',
    '<h1 class="pt-4 px-4">Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.</h1><p class="fs-4 mt-2 pb-5">--Voltaire</p>',
    '<h1 class="pt-4 px-4">Focus more on your desire than on your doubt, and the dream will take care of itself.</h1><p class="fs-4 mt-2 pb-5">--Mark Twain</p>',
    '<h1 class="pt-4 px-4">The most common way people give up their power is by thinking they donot have any.</h1><p class="fs-4 mt-2 pb-5">--Alice Walker</p>',
]

var Btn = document.getElementById("btn");
Btn.addEventListener("click", function(){
    var random = Math.floor(Math.random()*quotes.length);
    document.getElementById("demo").innerHTML = quotes[random];
    return
})

