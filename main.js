

let outputAnswer = document.getElementById("output");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random()
  console.log(randNum)
  

  let question = document.getElementById("search-in").value.toLowerCase();
  
  if (question === "is javascript awesome") {
    outputAnswer.innerHTML = `Yes, obviously.`;
  } else if (question === "does a magic 8 ball actually work") {
    outputAnswer.innerHTML = `How dare you doubt me.`;
  } else if (question === "") {
    outputAnswer.innerHTML = `Please enter in a question.`;
  } else if (randNum < 0.2) {
    outputAnswer.innerHTML = `Without a Doubt`
    }else if (randNum <0.4 && randNum >0.2) {
      outputAnswer.innerHTML = `As I see it, yes` 
    }else if (randNum <0.6 && randNum >0.4) {
      outputAnswer.innerHTML = `Concentrate and ask again` 
    }else if (randNum <0.8 && randNum >0.6) {
      outputAnswer.innerHTML = `Don't count on it` 
    }else if (randNum <0.1 && randNum >0.8) {
      outputAnswer.innerHTML = `Outlook not so good` 
    }
  }
  
  

