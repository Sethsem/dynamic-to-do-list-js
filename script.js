document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add event listener for the remove button
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append the remove button to the task item
        li.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Event listener for adding a task when the button is clicked
    addButton.addEventListener('click', addTask);

    // Event listener for adding a task when the "Enter" key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
