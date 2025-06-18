
const words = ["UI/UX Designer", "Web Developer", "Software Developer", "Data Analyst"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  const typing = document.querySelector(".typing");

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].slice(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].slice(0, j--);
    }

    typing.textContent = currentWord;

    if (j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 100 : 100);
  }
}

document.addEventListener("DOMContentLoaded", type);
