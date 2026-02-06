// HEARTS ANIMATION ❤️
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  heart.style.fontSize = 14 + Math.random() * 30 + "px";
  heart.innerText = "❤️";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 300);


// QUESTIONS LOGIC 💌
function answerYes(q) {
  if (q === 1) {
    document.getElementById("result1").innerText = "YAYYY 😍 I knew it!!";
    document.getElementById("q2").style.display = "block";
  }

  if (q === 2) {
    document.getElementById("result2").innerText = "STOPPPP 🥹💍❤️";
    document.getElementById("final").style.display = "block";
  }
}

function answerNo(q) {
  if (q === 1) {
    document.getElementById("result1").innerText =
      "Wrong answer 😤 Try again 😌";
  }

  if (q === 2) {
    document.getElementById("result2").innerText =
      "Excuse me?? 😭 Click YES right now 😤❤️";
  }
}


