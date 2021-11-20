let boldText = document.querySelector('#boldText');
let italicText = document.querySelector('#italicText');
let sublimeText = document.querySelector('#sublimeText');
let sizeText = document.querySelector('#size');
let textBox = document.querySelector('textarea');
sizeText.value = '10'

function boldingText() {
    if(!textBox.classList.contains('bold')) {
        textBox.classList.add('bold')
        boldText.style.filter = 'brightness(1.2)';
    } else {
        textBox.classList.remove('bold')
        boldText.style.filter = '';
    }
}

function inItalicText() {
    if(!textBox.classList.contains('italic')) {
        textBox.classList.add('italic');
        italicText.style.filter = 'brightness(1.2)';
    } else {
        textBox.classList.remove('italic');
        italicText.style.filter = '';
    }
}

function sublimingText() {
    if(!textBox.classList.contains('sublime')) {
        textBox.classList.add('sublime');
        sublimeText.style.filter = 'brightness(1.2)';
    } else {
        textBox.classList.remove('sublime');
        sublimeText.style.filter = '';
    }
}

function sizingText() {
    textBox.style.fontSize = sizeText.value + "pt";
}

function stylingText() {
    let fontText = document.querySelector('#fonts');
    let font = Number(fontText.options[fontText.selectedIndex].value);
    
    switch (font) {
        case 0:
            textBox.style.fontFamily = 'Arial';
            break;
        case 1: 
            textBox.style.fontFamily = "'Times New Roman', Times, serif";
            break;
        case 2:
            textBox.style.fontFamily = 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif';
            break;
        case 3: 
            textBox.style.fontFamily = 'Cambria, Georgia, serif'
            break;
        case 4: 
            textBox.style.fontFamily = 'Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif'
            break;
        case 5: 
            textBox.style.fontFamily = 'Consolas, monaco, monospace'
            break;
        case 6: 
            textBox.style.fontFamily = 'Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace'
            break;
    }
}

sizeText.addEventListener('keydown', function (event) {
    const key = event.key;
    
    if(key == 'ArrowUp') {
        if (Number(sizeText.value) < 200) {
            sizeText.value++;
            textBox.style.fontSize = sizeText.value+'pt';
        }
    }

    if(key == 'ArrowDown') {
        if(Number(sizeText.value) > 1) {
            sizeText.value--;
            textBox.style.fontSize = Number(sizeText.value)+'pt';
        }
    }
});