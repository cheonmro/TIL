var todos = [];

// Get DOM object
var toDoInput = document.querySelector('#input-todo');
var list = document.querySelector('ul');


// rendering basic HTML
function renderHTML() {
  // console.log('f');
  list.innerHTML = '';

  todos.forEach(function(todo) {
    list.innerHTML
    += '<li class="list-group-item"> <div class="hover-anchor">'
    + '<a class="hover-action text-muted">'
    + '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="'
    + todo.id + '"></span> </a> <label class="i-checks" for="' + todo.id + '">'
    + '<input type="checkbox" id="' + todo.id + '"><i></i> <span>' + todo.content + '</span> </label> </div></li> ';
  });
}


// function addToDo () {

// }


// add new todo when entering input
function addToDo() {
  // get array of ids

  // console.log(val);
  var getIds = todos.map(function(todo) {
    return todo.id;
  });
  // console.log(getIds);


  // max value
  var lastId = Math.max.apply(null, getIds);
  // console.log(lastId);


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
}

// When entering after input
toDoInput.addEventListener('keyup', function(e) {
  // console.log(this.value);
  if (e.keyCode !== 13) return;
  // console.log('enter');
  // console.log(this.value); // input value 'a'
  addToDo();
  toDoInput.value = '';
});

list.addEventListener('click', function(e) {
  // console.log('list');
  // console.log(e);
  if (e.target.nodeName === 'SPAN') {
    // console.log('a');

    todos = todos.filter(function(todo) {
      return todo.id !== +e.target.dataset.id;
    });


    // console.log(list.firstChild);
    // list.removeChild(list.firstChild);
    renderHTML(todos);
  }
  // console.log(todos);

  // toggle
  if (e.target.nodeName === 'INPUT') {
    todos = todos.map(function(todo) {
      return Object.assign({}, todo, { completed: (todo.id === +e.target.id) ? !todo.completed : todo.completed });
    });
  }
});


window.addEventListener('load', function() {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'Javascript', completed: false }
  ];
  renderHTML(todos);
});
