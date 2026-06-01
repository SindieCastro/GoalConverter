console.log("JS LOADED");

function convertGoal() {function convert("timeframe").value;

  if (!input) {
    alert("Please enter a goal");
    return;
  }

  let resultText = "";

  if (input.toLowerCase().includes("eat")) {
    resultText = `Eat no more than 2,000 calories per day for ${timeframe} days and track meals daily`;
  }
  else if (input.toLowerCase().includes("money") || input.toLowerCase().includes("earn")) {
    resultText = `Earn $1,000 per month for the next ${timeframe} days and track income weekly`;
  }
  else if (input.toLowerCase().includes("study") || input.toLowerCase().includes("learn")) {
    resultText = `Study for 1 hour daily and complete 5 lessons per week for ${timeframe} days`;
  }
  else if (input.toLowerCase().includes("exercise") || input.toLowerCase().includes("fitness")) {
    resultText = `Exercise 4 times per week for 30 minutes for ${timeframe} days`;
  }
  else {
    resultText = `Break "${input}" into weekly measurable targets and complete within ${timeframe} days`;
  }

  document.getElementById("result").innerText = resultText;

  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(resultText);
  localStorage.setItem("goals", JSON.stringify(goals));

  displayGoals();
}
  console.log("Button clicked");

  const input = document.getElementById("goalInput").value;


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
