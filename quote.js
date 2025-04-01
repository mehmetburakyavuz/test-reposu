let quoteContainer = document.getElementById('quote-container')
let quoteText = document.getElementById('text');
let quoteAuthor = document.getElementById('author');
let quoteButton = document.getElementById('button');
// let quoteButtoni = document.getElementById('button-ilkkan');



// function ilkkanQuote(){
//     try{

//         const quote = ilkkanQuotes[Math.floor(Math.random() * ilkkanQuotes.length)];

//         //Text
//         if(!quote.text){
//             quoteText.textContent = 'Yok';

//         }else{
//             quoteText.textContent = quote.text;
//         }

//         //Author
//         if(!quote.author){
//             quoteAuthor.textContent = "Unknown";
//         }else{
//             quoteAuthor.textContent = quote.author;
//         }
//     }
//     catch(error){
//         console.log('ooopss quote yok');
//     }
// }



async function getQuote(){
    
    try{

        const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

        //Text
        if(!quote.text){
            quoteText.textContent = 'Yok';

        }else{
            quoteText.textContent = quote.text;
        }

        //Author
        if(!quote.author){
            quoteAuthor.textContent = "Unknown";
        }else{
            quoteAuthor.textContent = quote.author;
        }
    }
    catch(error){
        console.log('ooopss quote yok');
    }
}

quoteButton.addEventListener('click', getQuote);
quoteButtoni.addEventListener('click', ilkkanQuote);

getQuote();
