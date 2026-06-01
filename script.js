console.log("JS LOADED ✅");

function convertGoal() {
  console.log("Button clicked ✅");

  var inputElement = document.getElementById("goalInput");
  var timeframeElement = document.getElementById("timeframe");

  if (!inputElement) {
    alert("Input not found");
    return;
  }

  var input = inputElement.value;
  var timeframe = timeframeElement ? timeframeElement.value : "30";

  if (!input) {
    alert("Please enter a goal");
    return;
  }

  var resultText = generateGoal(input, timeframe);

  var resultDiv = document.getElementById("result");
  if (resultDiv) {
    resultDiv.innerText = resultText;
  }

  saveGoal(resultText);
  displayGoals();
}

function generateGoal(input, timeframe) {
  var text = input.toLowerCase();

  if (text.includes("weight")) {
    return "✅ Reduce body weight by 5–10% over " + timeframe + " days by exercising 4 times per week and maintaining a calorie deficit";
  }

  if (text.includes("eat")) {
    return "✅ Maintain a daily calorie target and track meals daily for " + timeframe + " days";
  }

  if (text.includes("earn") || text.includes("money")) {
    return "✅ Increase income by 15–25% over " + timeframe + " days by completing weekly revenue-generating activities";
  }

  if (text.includes("study") || text.includes("learn")) {
    return "✅ Complete 5 focused study sessions per week for " + timeframe + " days";
  }

  if (text.includes("exercise") || text.includes("fitness")) {
    return "✅ Perform 4 structured workouts per week for " + timeframe + " days";
  }

  return "✅ Define a measurable KPI for '" + input + "' and track progress weekly for " + timeframe + " days";
}

function saveGoal(goal) {
  var goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(goal);
  localStorage.setItem("goals", JSON.stringify(goals));
}

function displayGoals() {
  var list = document.getElementById("savedGoals");
  if (!list) return;

  list.innerHTML = "";

  var goals = JSON.parse(localStorage.getItem("goals")) || [];

  for (var i = 0; i < goals.length; i++) {
    var li = document.createElement("li");
    li.innerText = goals[i];
    list.appendChild(li);
  }
}

window.onload = displayGoals;
