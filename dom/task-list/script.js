  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", () => {
    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  });