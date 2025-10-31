import { initialTasks } from './initialData.js';

function createTaskElement(task) {
  const taskDivElement = document.createElement('div');
  taskDivElement.className = 'task-div';
  taskDivElement.textContent = task.title;
  taskDivElement.dataset.id = task.id;
  taskDivElement.addEventListener('click', () => openTaskModal(task));
  return taskDivElement;
}

function getTasksContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector('.tasks-container') : null;
}

function clearExistingTasks() {
  document.querySelectorAll('.tasks-container').forEach(container => {
    container.innerHTML = '';
  });
}

function renderTasks(tasks) {
  tasks.forEach(task => {
    const tasksContainer = getTasksContainerByStatus(task.status);
    if (tasksContainer) {
      tasksContainer.appendChild(createTaskElement(task));
    }
  });
}

function openTaskModal(task) {
  const modal = document.getElementById('task-modal');
  document.getElementById('task-title').value = task.title;
  document.getElementById('task-desc').value = task.description;
  document.getElementById('task-status').value = task.status;
  modal.showModal();
}

function closeTaskModal() {
  const modal = document.getElementById('task-modal');
  modal.close();
}

function initialTasksList() {
  clearExistingTasks();
  renderTasks(initialTasks);
  closeTaskModal();
}

document.addEventListener('DOMContentLoaded', initialTasksList);
