function showInstult(insult){
    const insultElem= document.querySelector('#insult');
    const playtElem= document.querySelector('#play');
    
    insultElem.innerHTML= insult.insult;
    playtElem.innerHTML = insult.play;
}


async function getInsult() {
    const res= await fetch('http://localhost:8000/api/insult');
    const data= await res.json();

    showInstult(data);
}

getInsult();