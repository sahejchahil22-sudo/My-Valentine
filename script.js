// ❤️ Floating hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  heart.style.fontSize = (14 + Math.random() * 30) + "px";

  heart.innerText = "❤️";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 250);


// 💌 Valentine questions
function answerYes(q) {
  if (q === 1) {
    document.getElementById("result1").innerText = "YAYYY 😍 I knew it!!";

    // Hide question 1 after yes
    setTimeout(() => {
      document.getElementById("q1").style.display = "none";
      document.getElementById("q2").style.display = "block";
    }, 700);
  }

  if (q === 2) {
    document.getElementById("result2").innerText = "STOPPPP 🥹💍❤️";

    // Hide question 2 and show final message
    setTimeout(() => {
      document.getElementById("q2").style.display = "none";
      document.getElementById("final").style.display = "block";
      document.getElementById("final").scrollIntoView({ behavior: "smooth" });
    }, 700);
  }
}

function answerNo(q) {
  if (q === 1) {
    document.getElementById("result1").innerText =
      "Wrong answer 😤 Click YES 😌";
  }

  if (q === 2) {
    document.getElementById("result2").innerText =
      "Excuse me?? 😭 Click YES right now 😤❤️";
  }
}
