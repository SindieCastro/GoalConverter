console.log("JS LOADED ✅");

// MAIN FUNCTION
function generateGoal(input, timeframe) {
  const text = input.toLowerCase();

  if (text.includes("lose weight")) {
    return `✅ Lose 1–2 pounds per week for ${timeframe} days by exercising 4 times per week and tracking calories daily`;
  }

  if (text.includes("eat")) {
    return `✅ Limit daily calorie intake to 2,000 calories and track meals daily for ${timeframe} days`;
  }

  if (text.includes("earn") || text.includes("money")) {
    return `✅ Earn $1,000 per month for ${timeframe} days by tracking income weekly and completing income-generating tasks daily`;
  }

  if (text.includes("study") || text.includes("learn")) {
    return `✅ Study 1 hour daily and complete 5 lessons per week for ${timeframe} days`;
  }

  if (text.includes("exercise") || text.includes("fitness")) {
    return `✅ Exercise 4 times per week for 30 minutes for ${timeframe} days`;
  }

  // fallback (better than before)
  return `✅ Set a specific weekly target for "${input}" and track progress daily for ${timeframe} days`;
}

// GOAL GENERATOR (isolated = safer)
function generateGoal(input, timeframe) {
  const text = input.toLowerCase();

  if (text.includes("eat")) {
    return `✅ Eat no more than 2,000 calories per day for ${timeframe} days and track meals daily`;
  }

  if (text.includes("money") || text.includes("earn")) {
    return `✅ Earn $1,000 per month for ${timeframe} days and track income weekly`;
  }

  if (text.includes("study") || text.includes("learn")) {
    return `✅ Study 1 hour daily for ${timeframe} days`;
  }

  if (text.includes("exercise") || text.includes("fitness")) {
    return `✅ Exercise 4 times per week for ${timeframe} days`;
  }

  return `✅ Break "${input}" into weekly measurable goals for ${timeframe} days`;
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
