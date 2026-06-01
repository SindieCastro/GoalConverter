console.log("JS LOADED");

// MAIN FUNCTION
function convertGoal() {
  try {
    console.log("Button clicked");

    const inputElement = document.getElementById("goalInput");
    const timeframeElement = document.getElementById("timeframe");

    if (!inputElement) {
      throw new Error("goalInput not found");
    }

    const input = inputElement.value;
    const timeframe = timeframeElement ? timeframeElement.value : "30";

    if (!input) {
      alert("Please enter a goal");
      return;
    }

    const resultText = generateGoal(input, timeframe);

    document.getElementById("result").innerText = resultText;

    saveGoal(resultText);
    displayGoals();

  } catch (error) {
    console.error("Error:", error);
    alert("Something broke — check console");
  }
}

// GOAL GENERATOR (isolated = safer)
function generateGoal(input, timeframe) {
  const text = input.toLowerCase();

  if (text.includes("eat")) {
    return `Eat no more than 2,000 calories per day for ${timeframe} days and track meals daily`;
  }

  if (text.includes("money") || text.includes("earn")) {
    return `Earn $1,000 per month for ${timeframe} days and track income weekly`;
  }

  if (text.includes("study") || text.includes("learn")) {
    return `Study 1 hour daily for ${timeframe} days`;
  }

  if (text.includes("exercise") || text.includes("fitness")) {
    return `Exercise 4 times per week for ${timeframe} days`;
  }

  return `Break "${input}" into weekly measurable goals for ${timeframe} days`;
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


