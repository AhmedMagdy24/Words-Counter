

// where we write our text 
const textArea = document.getElementById('description');



textArea.addEventListener('input', () => {
    const textLn =  textArea.value;

    // where the count is displayed
    document.getElementById('countText').innerHTML=''+getWordCount(textLn);
});

// to count the words after each space on the keyboard
function getWordCount(str) {
     return str.trim().split(/\s+/).length;
}







