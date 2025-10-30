

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

