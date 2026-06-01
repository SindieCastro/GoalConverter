
function convertGoal() {
  constStorage  const input = document.getElementById("goalInput").value;
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(measurable);
  localStorage.setItem("goals", JSON.stringify(goals));

  displayGoals();
}

// Display saved goals
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

// Load saved goals on page load
window.onload = displayGoals;

  if (!input) return;

  // Simple "SMART-like" transformation
  const measurable = `✅ ${input} — Set a target, track progress weekly, and complete within 30 days.`;

  // Show result
  document.getElementById("result").innerText = measurable;

