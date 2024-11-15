const containerEl = document.querySelector(".container");

const careers = ["Youtuber","Web Developer","FreeLancer","Instructor"];

let careerindex = 0

let characterindex = 0;

updatetext()

function updatetext(){
    characterindex++
    containerEl.innerHTML = ` <h1>I am ${careers[careerindex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerindex].slice(0,characterindex)}</h1>`;
    
    if(characterindex===careers[careerindex].length){
        careerindex++
        characterindex = 0
    }

    if(careerindex===careers.length){
        careerindex = 0; 
    }

    setTimeout(updatetext, 400);
}




