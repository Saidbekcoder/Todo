let input = document.getElementById('input');
let add = document.getElementById('add-btn');
let tasks = document.getElementById('tasks');

// add new task
add.addEventListener('click', () => {
  if (input.value.trim() != 0) {
    let newTask = document.createElement('li')
    newTask.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    newTask.innerHTML = `
      <div>
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label" for="firstCheckbox">${input.value}</label>
      </div>
      <i class="ri-delete-bin-6-fill text-danger"></i>
    `

    tasks.appendChild(newTask)
    input.value = ''
  }
})

// delete task from list
tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('ri-delete-bin-6-fill')) {
    e.target.parentElement.remove()
  }
})


// mark task as completed
tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('form-check-input')) {
    let label = e.target.nextElementSibling;
    label.classList.toggle('text-decoration-line-through');
  }
});

console.warn("HEllo");