document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' means do not save again to Local Storage
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // Check if taskText is empty
        if (taskText.trim() === "") {
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
            removeTaskFromLocalStorage(taskText);
        });

        // Append the remove button to the task item
        li.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(li);

        // Save task to Local Storage if necessary
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Event listener for adding a task when the button is clicked
    addButton.addEventListener('click', () => {
        addTask(taskInput.value.trim());
    });

    // Event listener for adding a task when the "Enter" key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
