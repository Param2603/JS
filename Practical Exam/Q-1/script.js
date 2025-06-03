let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function addTask() {
      let title = document.getElementById('title').value;
      let description = document.getElementById('description').value;
      let dueDate = document.getElementById('dueDate').value;
      let priority = document.getElementById('priority').value;

      if (!title || !dueDate) {
        alert('Title and due date are required!');
        return;
      }

      let task = {
        id: Date.now(),
        title,
        description,
        dueDate,
        priority
      };

      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      clearForm();
      displayTasks();
    }

    function displayTasks() {
      let taskList = document.getElementById('taskList');
      let filter = document.getElementById('filterPriority').value;
      taskList.innerHTML = '';

      tasks.filter(task => filter === 'all' || task.priority === filter)
           .forEach(task => {
        let taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
          <span><strong>${task.title}</strong></span>
          <span>${task.description}</span>
          <span>${task.dueDate}</span>
          <span>${task.priority}</span>
          <button onclick="editTask(${task.id})">Edit</button>
          <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskDiv);
      });
    }

    let selectedPriority = 'low'; 

document.querySelectorAll('#priority li').forEach(item => {
  item.addEventListener('click', function () {
    selectedPriority = this.getAttribute('data-value');
    document.querySelectorAll('#priority li').forEach(li => li.classList.remove('selected'));
    this.classList.add('selected');
  });
});

    function deleteTask(id) {
      tasks = tasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    }

    function editTask(id) {
      let task = tasks.find(task => task.id === id);
      document.getElementById('title').value = task.title;
      document.getElementById('description').value = task.description;
      document.getElementById('dueDate').value = task.dueDate;
      document.getElementById('priority').value = task.priority;

      deleteTask(id);
    }

    function clearForm() {
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      document.getElementById('dueDate').value = '';
      document.getElementById('priority').value = 'low';
    }
    window.onload = displayTasks;