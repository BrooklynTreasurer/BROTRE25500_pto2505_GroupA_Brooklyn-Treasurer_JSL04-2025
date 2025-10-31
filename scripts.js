

function createTaskElement(task) {
  const taskDivElement = document.createElement('div');
  taskDiv.className = 'task-div';
  taskDiv.textContent = task.title;
  taskDiv.dataset.id = task.id;
  taskDivElement.addEventListener('click', () => openModal(task));
  return taskDivElement;
}

function getTasksContainerByStatus(status) {
   const column = document.querySelector(`.column-div[data-status="${status}"]`);
   return column.querySelector('.tasks-container');
}

function clearExistingTasks() {
  document.querySelectorAll('.tasks-container').forEach(container => {
    container.innerHTML = '';
  });
}

function renderTasks(tasks) {
  initialTasks.forEach(task => {
    const tasksContainer = getTasksContainerByStatus(task.status);
    if (tasksContainer) {
      tasksContainer.appendChild(createTaskElement(task));
    }
  });
}

function openTaskModal(task) {
      const modal = document.getElementById('task-modal');
      document.getElementById('task-title').value = movie.title;
      document.getElementById('task-desc').value = movie.description;
      document.getElementById('task-status').value = movie.status;
      modal.showModal();
    }

function closeTaskModal() {
      const modal = document.getElementById('task-modal');
      modal.close();
    }

