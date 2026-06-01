
function convertGoal() {function convertGoal()ElementById("goalInput").value;

  const measurable = `Work toward "${goal}" by setting a weekly measurable target and deadline.`;

  document.getElementById("result").innerText = measurable;

  // Save to browser
  localStorage.setItem("lastGoal", measurable);
}
