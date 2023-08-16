

let result = null;
const screen = document.querySelector(".screen");
let isCalculated = false;

document.querySelectorAll(".btn").forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (
      !e.currentTarget.classList.contains("deleter") &&
      !(e.currentTarget.id === "equel")
    ) {
      if (e.currentTarget.classList.contains("number")) {
        if(isCalculated && Number(screen.firstChild.textContent)){
          screen.firstChild.textContent = "";
          isCalculated =false;
        }
          screen.firstChild.textContent = `${screen.firstChild.textContent}${this.textContent}`;
      } else {
        const content = screen.firstChild.textContent;
        if (["*", "/", "-", "+"].includes(content.charAt(content.length - 1))) {
          screen.firstChild.textContent = content.substring(0,content.length - 1);
          screen.firstChild.textContent = `${screen.firstChild.textContent}${this.textContent}`;
        } else {
          screen.firstChild.textContent = `${screen.firstChild.textContent}${this.textContent}`;
        }
      }
    }
  });
});


document.querySelector(".deleter").addEventListener("click", function (e) {
  const content = screen.firstChild.textContent;
  screen.firstChild.textContent = content.substring(0, content.length - 1);
  console.log(content);
});

document.querySelector("#equel").addEventListener("click", function (e) {
  let content = screen.firstChild.textContent;
  let numbers = null;
  console.log(content,numbers);
  if (content.includes("+")) {
    numbers = content.split('+');
    result = Number(numbers[0]) + Number(numbers[1]);
  } else if (content.includes("-")) {
      numbers = content.split("-");
    result = Number(numbers[0]) - Number(numbers[1]);
  } else if (content.includes("*")) {
      numbers = content.split("*");
    result = Number(numbers[0]) * Number(numbers[1]);
  } else if (content.includes("/")) { 
      numbers = content.split("/");
    result = Number(numbers[0]) / Number(numbers[1]);
  } else {
    result = content;
  }
  isCalculated = true;
  screen.firstChild.textContent = result;
});
