console.log("JS LOADED ✅");
// MAIN FUNCTION

function generateGoal(input, timeframe) {
  var text = input.toLowerCase();

  if (text.includes("increase")) {
    return "✅ Increase performance of '" + input + "' by 15–25% over " + timeframe + " days by tracking progress weekly and executing targeted actions";
  }

  if (text.includes("decrease") || text.includes("reduce")) {
    return "✅ Reduce '" + input + "' by 10–20% over " + timeframe + " days by monitoring metrics weekly";
  }

  if (text.includes("weight")) {
    return "✅ Reduce body weight by 5–10% over " + timeframe + " days by exercising 4 times per week and maintaining a calorie deficit";
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


// SAVE FUNCTION (separate = safer)
function saveGoal(goal) {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(goal);
  localStorage.setItem("goals", JSON.stringify(goals));
}
// DISPLAY FUNCTION
function displayGoals() {
  const list = document.getElementById("savedGoals");
  if (!list) return;

  list.innerHTML = "";

  let goals = JSON.parse(localStorage.getItem("goals")) || [];

  goals.forEach(function(goal) {
    const li = document.createElement("li");
    li.innerText = goal;
    list.appendChild(li);
  });
}

window.onload = displayGoals;
