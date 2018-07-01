var todos = [];

// Get DOM object
var toDoInput = document.querySelector('#input-todo');
var list = document.querySelector('#todo-list');
var xBtn = document.querySelector('.list-group');

var markAll = document.querySelector('#chk-allComplete');
var allTab = document.querySelector('#all');
var activeTab = document.querySelector('#active');
var compleTab = document.querySelector('#completed');
var getActiveClass = document.querySelectorAll('li.active');

var countCompleted = document.querySelector('#completedTodos');
var clearBtn = document.querySelector('#btn-removeCompletedTodos');
var countLeft = document.querySelector('#activeTodos');


// render initial HTML
function renderHTML(_todos) {
  // remove todo list displayed
  list.innerHTML = '';

  // display todo list
  _todos.forEach(function(todo) {
    list.innerHTML
    += '<li class="list-group-item"> <div class="hover-anchor">'
    + '<a class="hover-action text-muted">'
    + '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="'
    + todo.id + '"></span> </a> <label class="i-checks" for="' + todo.id + '">'
    + '<input type="checkbox" id="' + todo.id + '"' + (todo.completed === true ? 'checked' : '') + '><i></i> <span>' + todo.content + '</span> </label> </div></li> ';
  });
}

// apply to 'clear' button and items left
function assignValues(_todos) {
  // the number of completed after cliking checkbox
  var itemsCompleted = _todos.filter(function(todo) {
    return todo.completed === true;
  }).length;
  // console.log(itemsCompleted);

  // change the number of completed in 'clear completed' button
  countCompleted.textContent = itemsCompleted;

  // the number of items left
  var itemsLeft = _todos.filter(function(todo) {
    return todo.completed === false;
  }).length;
  // console.log(itemsLeft);

  // change the number of items left
  countLeft.textContent = itemsLeft;
}

// add new todo when entering input
function addToDo() {
  // get array of ids
  var getIds = todos.map(function(todo) {
    return todo.id;
  });

  // max value
  var lastId = Math.max.apply(null, getIds);

  // create new object
  var newToDo = [{
    id: lastId + 1,
    content: toDoInput.value,
    completed: false
  }];

  // [].concat(todos)
  todos = newToDo.concat(todos);

  // add newtodo to browser
  renderHTML(todos);

  // add the number of completed('clear' button) and the number of items left
  assignValues(todos);
}

// add color to tab clicked, and remove color to tab unclicked
function addColorTab(tab) {
  getActiveClass.forEach(function(_li) {
    _li.className = '';
  });
  tab.className = 'active';
}

// when entering after input
toDoInput.addEventListener('keyup', function(e) {
  // console.dir(e);
  if (e.keyCode !== 13) return;
  // console.log('enter');
  // console.log(this.value); // input value 'a'
  addToDo();
  toDoInput.value = '';
});

// when clicking todo list
list.addEventListener('change', function(e) {
  // console.dir(e);
  // toggle: when clicking 'input' checkbox
  if (e.target.nodeName === 'INPUT') {
    // todo.completed changed after cliking checkbox
    todos = todos.map(function(todo) {
      return Object.assign({}, todo, { completed: (todo.id === +e.target.id) ? !todo.completed : todo.completed });
    });

    // the number of completed after cliking checkbox
    // change the number of completed in 'clear completed' button
    assignValues(todos);
    // the number of items left
    // change the number of items left
  }
});

// When clicking 'x' button to remove todo
xBtn.addEventListener('click', function(e) {
  if (e.target.nodeName === 'SPAN') {
    todos = todos.filter(function(todo) {
      return todo.id !== +e.target.dataset.id;
    });

    // remove todo for display
    renderHTML(todos);

    // minus the number of completed('clear' button) and the number of items left
    assignValues(todos);
  }
});

// when clicking 'Mark all as complete'
markAll.addEventListener('click', function() {
  // 'Mark all' button (unchecked -> checked / checked -> unchecked)
  var checked = this.checked === true ? this.checked : false;
  // for data
  todos = todos.map(function(todo) {
    return Object.assign({}, todo, { completed: checked });
  });

  // for display
  renderHTML(todos);

  // apply to 'clear' button and items left
  assignValues(todos);
});

// when cliking 'All' button
allTab.addEventListener('click', function() {
  // for data
  var allTodos = todos.map(function(todo) {
    return Object.assign({}, todo);
  });

  // for display
  renderHTML(allTodos);

  // add color to 'All' button
  addColorTab(this);
});

// when clicking 'Active' tab
activeTab.addEventListener('click', function() {
  // for data
  var actTodos = todos.filter(function(todo) {
    return todo.completed === false;
  });

  // for display
  renderHTML(actTodos);

  // add color to 'Active' tab
  addColorTab(this);
});

// when clicking 'Completed' tab
compleTab.addEventListener('click', function() {
  // for data
  var compleTodos = todos.filter(function(todo) {
    return todo.completed === true;
  });

  // for display
  renderHTML(compleTodos);

  // add color to 'Completed' tab
  addColorTab(this);
});

// when clicking 'clear' button
clearBtn.addEventListener('click', function() {
  todos = todos.filter(function(todo) {
    return todo.completed !== true;
  });
  renderHTML(todos);

  // initialize textNode(the number of completed) as 0
  countCompleted.textContent = 0;
});

// when browser is 'load'ed
window.addEventListener('load', function() {
  todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'Javascript', completed: false }
  ];

  // Initialize the number of completed based on todos completed
  // Initialze the number of items left
  assignValues(todos);

  // render initial HTML
  renderHTML(todos);
});
