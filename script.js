console.log("JS LOADED ✅");console.log("JS LOADED ✅Goal() {
  console.log("Button clicked ✅");

  var input = document.getElementById("goalInput").value;
  var timeframe = document.getElementById("timeframe").value;

  if (!input) {
    alert("Please enter a goal");
    return;
  }

  var resultText = generateGoal(input, timeframe);

  document.getElementById("result").innerText = resultText;

  saveGoal(resultText);
  displayGoals();
}

function generateGoal(input, timeframe) {
  var text = input.toLowerCase();

  if (text.includes("increase")) {
    return "✅ Increase '" + input + "' by 15–25% over " + timeframe + " days";
  }

  if (text.includes("decrease") || text.includes("reduce")) {
    return "✅ Reduce '" + input + "' by 10–20% over " + timeframe + " days";
  }

  if (text.includes("weight")) {
    return "✅ Reduce body weight by 5–10% over " + timeframe + " days";
  }

  if (text.includes("earn") || text.includes("money")) {
    return "✅ Increase income by 15–25% over " + timeframe + " days";
  }

  return "✅ Define a measurable KPI for '" + input + "' for " + timeframe + " days";
}

function saveGoal(goal) {
  var goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(goal);
  localStorage.setItem("goals", JSON.stringify(goals));
}

function displayGoals() {
  var list = document.getElementById("savedGoals");
  list.innerHTML = "";

  var goals = JSON.parse(localStorage.getItem("goals")) || [];

  for (var i = 0; i < goals.length; i++) {
    var li = document.createElement("li");
    li.innerText = goals[i];
    list.appendChild(li);
  }
}

window.onload = displayGoals;


