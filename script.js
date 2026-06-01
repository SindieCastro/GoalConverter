
function convertGoal() {
  console.log("Button clicked");

  const input = document.getElementById("goalInput").value;

  if (!input) {
    alert("Please enter a goal");
    return;
  }

  const resultText = ` ${input} — Track it weekly and complete in 30 days`;

  document.getElementById("result").innerText = resultText;

  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(resultText);
  localStorage.setItem("goals", JSON.stringify(goals));

  displayGoals();
}

function displayGoals() {
  const list = document.getElementById("savedGoals");
  list.innerHTML = "";

  let goals = JSON.parse(localStorage.getItem("goals")) || [];

  goals.forEach(goal => {
    const li = document.createElement("li");
    li.innerText = goal;
    list.appendChild(li);
  });
}

window.onload = displayGoals;


