function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = ['Frontend Developer', 'UI/UX designer'];
const el = document.getElementById('typed');
let sleepTime = 100;
let phraseIndex = 0;
const writeLoop = async() =>{
  while(true){
    let curWord = phrases[phraseIndex];
    for(let i = 0; i < curWord.length; i++){
        el.innerText = curWord.substring(0,i + 1);
        await sleep(sleepTime);
    }
    await sleep(sleepTime * 10);
    for(let i = curWord.length; i > 0; i--){
        el.innerText = curWord.substring(0,i - 1);
        await sleep(sleepTime);
    }
    await sleep(sleepTime * 5);
    if(phraseIndex === phrases.length -1){
        phraseIndex = 0;
    }
    else{
        phraseIndex++;
    }
  }
};
writeLoop();