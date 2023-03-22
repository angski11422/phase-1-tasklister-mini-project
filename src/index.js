document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTask = document.querySelector('#new-task-description');
    addToDo(newTask.value);
    form.reset();
  })
});

function addToDo(task) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  let done = document.createElement('button');
  done.addEventListener('click', completeTask);
  btn.addEventListener('click', deleteTask);
  btn.textContent = 'delete';
  done.textContent = 'done';
  li.textContent = `${task} `;
  li.appendChild(btn);
  li.appendChild(done);
  document.querySelector('#tasks').appendChild(li);
}
function deleteTask(e) {
  e.target.parentNode.remove();
}
function completeTask(e) {
  e.target.parentNode.style.textDecoration = "line-through";
}