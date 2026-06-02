console.log("JS LOADED ✅");

function convertGoal() {
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

 
  
var increaseWords = ["increase", "improve", "grow", "boost", "expand", "raise", "enhance", "maximize", "scale", "optimize"];
var decreaseWords = ["decrease", "reduce", "lower", "cut", "minimize", "limit", "shrink", "drop"];

  var isIncrease = false;
  for (var i = 0; i < increaseWords.length; i++) {
    if (text.includes(increaseWords[i])) {
      isIncrease = true;
      break;
    }
  }

  var isDecrease = false;
  for (var i = 0; i < decreaseWords.length; i++) {
    if (text.includes(decreaseWords[i])) {
      isDecrease = true;
      break;
    }
  }

  if (isIncrease) {
    var cleaned = input.toLowerCase();
    for (var i = 0; i < increaseWords.length; i++) {
      cleaned = cleaned.replace(increaseWords[i], "");
    }
    cleaned = cleaned.trim();

    return "✅ Achieve a 15–25% improvement in " + cleaned +
           " within " + timeframe + " days with weekly tracking";
  }

  if (isDecrease) {
    var cleaned = input.toLowerCase();
    for (var i = 0; i < decreaseWords.length; i++) {
      cleaned = cleaned.replace(decreaseWords[i], "");
    }
    cleaned = cleaned.trim();

    return "✅ Achieve a 10–20% reduction in " + cleaned +
           " over " + timeframe + " days";
  }

  return "✅ Define a measurable KPI for '" + input + "' for " + timeframe + " days";
  }


  if (text.includes("exercise") || text.includes("fitness")) {
    return "✅ Perform 4 workouts per week for " + timeframe + " days";
  }

  if (text.includes("study") || text.includes("learn")) {
    return "✅ Complete 5 study sessions per week for " + timeframe + " days";
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
