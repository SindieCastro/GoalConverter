console.log("JS LOADED ✅");

// MAIN FUNCTION
function generateGoal(input, timeframe) {function generateGoal(input, timeframe) text = input.toLowerCase();

  if (text.includes("lose weight")) {
    return `✅ Reduce body weight by 5–10% over ${timeframe} days by maintaining a daily caloric deficit and exercising 4x per week`;
  }

  if (text.includes("eat")) {
    return `✅ Maintain a consistent daily caloric intake aligned with target goals and log meals daily for ${timeframe} days`;
  }

  if (text.includes("earn") || text.includes("money")) {
    return `✅ Increase income by 15–25% over ${timeframe} days by completing weekly revenue-generating activities and tracking performance`;
  }

  if (text.includes("study") || text.includes("learn")) {
    return `✅ Complete 3–5 structured learning sessions per week and track progress across ${timeframe} days`;
  }

  if (text.includes("exercise") || text.includes("fitness")) {
    return `✅ Perform 4 structured workouts per week and track performance metrics for ${timeframe} days`;

if (text.includes("increase")) {
  return "✅ Increase performance of '" + input + "' by 15–25% over " + timeframe + " days by tracking progress weekly and executing targeted actions";
}

if (text.includes("decrease") || text.includes("reduce")) {
  return "✅ Reduce '" + input + "' by 10–20% over " + timeframe + " days by monitoring metrics weekly and implementing control measures";
}

  }

  return `✅ Define a measurable KPI for "${input}" and track progress weekly over ${timeframe} days`;
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
