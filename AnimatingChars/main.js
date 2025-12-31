const sentence = '30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABNEH YETAYEH';

const fontFamilies = [
  'Arial',
  'Verdana',
  'Helvetica',
  'Times New Roman',
  'Georgia',
  'Courier New',
  'Trebuchet MS',
  'Impact',
  'Comic Sans MS',
  'Palatino',
  'Garamond',
  'Tahoma',
  'Lucida Sans',
  'Arial Black',
  'Bookman'
];

const sentenceDiv = document.createElement("div");
sentenceDiv.className = 'text'
sentenceDiv.style.fontSize = '64px';



function AnimateSentence(){
    sentenceDiv.textContent = ''
    for(let char of sentence){
        const charSpan = document.createElement('span');
        const color = GenrateColor();
        charSpan.style.color = color
        charSpan.textContent = char
        sentenceDiv.style.fontFamily = fontFamilies[Math.floor(Math.random() * (fontFamilies.length))]
        sentenceDiv.appendChild(charSpan);
    }
    
    const bgColor = GenrateColor();
    document.body.style.backgroundColor = bgColor;
    
    document.body.appendChild(sentenceDiv)
}



function GenrateColor(){
    let r = parseInt(Math.random() * 255)
    let g = parseInt(Math.random() * 255)
    let b = parseInt(Math.random() * 255)
    
    let color = `rgb(${r}, ${g}, ${b})`
    return color;
}

setInterval(AnimateSentence, 2000);


