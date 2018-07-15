import axios from 'axios';

(function () {
  // TODO:

  // v2
  let todos = [];

  const list = document.querySelector('#todo-list');
  const inputTodo = document.querySelector('#input-todo');

  // count completed and items left
  const countTodos = document.querySelector('#completedTodos');
  const countItemsLeft = document.querySelector('#activeTodos');

  const renderTodo = _todos => {
    list.innerHTML = '';

    _todos.forEach(todo => {
      const checked = todo.completed ? 'checked' : '';
      list.innerHTML += `<li class="list-group-item">
      <div class="hover-anchor">
        <a class="hover-action text-muted">
          <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${todo.id}"></span>
        </a>
        <label class="i-checks" for="${todo.id}">
          <input type="checkbox" id="${todo.id}" ${checked}><i></i>
          <span>${todo.content}</span>
        </label>
      </div>
    </li>`;
    });
  };


  const postTodo = () => {
    todos = [
      { id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: false },
      { id: 3, content: 'Javascript', completed: true }
    ];

    todos.forEach(todo => {
      axios.post('/todos', todo)
        .then(({ data }) => {
        });
    });
    renderTodo(todos);
  };

  // get all todo from database, and delete all to start with empty data, and call postTodo()
  const initTodo = () => {
    axios.get('/todos')
      .then(({ data }) => {
        if (data.length > 0) {
          todos = data;
          todos.forEach(todo => {
            axios.delete(`/todos/${todo.id}`)
              .then(() => {
              });
          });
          postTodo();
        } else {
          postTodo();
        }
      });
  };


  // assign values for completed and items left
  const assignValues = _todos => {
    const numOfCompleted = _todos.filter(todo => (todo.completed === true)).length;
    countTodos.textContent = numOfCompleted;

    const numOfItemsLeft = _todos.filter(todo => (todo.completed === false)).length;
    countItemsLeft.textContent = numOfItemsLeft;
  };

  const getTodo = () => {
    axios.get('/todos')
      .then(({ data }) => {
        todos = data;
        renderTodo(todos);
        assignValues(todos);
      });
  };

  // when entering todo at input box
  const addTodo = val => {
    // get an array of ids only
    const getIds = todos.map(todo => todo.id);

    // get last Id
    const lastId = Math.max(...getIds);

    // create new todo
    const newTodo = {
      id: lastId + 1,
      content: val,
      completed: false
    };

    axios.post('/todos', newTodo)
      .then(({ data }) => {
        getTodo();
      });

    // assign values for initial completed and items left
    // assignValues(todos);

    // add new todo to initial todos
    // todos = [newTodo].concat(todos);

    // render html
    // renderHtml(todos);

    // assign values for initial completed and items left
    // assignValues(todos);
  };

  // when clicking 'Mark all as complete'
  document.querySelector('#chk-allComplete').addEventListener('change', () => {
    const markAll = document.querySelector('#chk-allComplete');

    todos = todos.map(todo => {
      const checkedState = markAll.checked ? markAll.checked : false;
      const { completed } = todo;
      axios.patch('/todos', { completed: checkedState })
        .then((() => console.log('com')));
      return Object.assign({}, todo, { completed: (checkedState) });
    });
    renderTodo(todos);
    assignValues(todos);
  });

  // when clicking input checkbox
  list.addEventListener('change', e => {
    // const checkId = todo.id === +e.target.id ? !todo.completed : todo.completed;
    if (e.target.nodeName !== 'INPUT') return;

    // if e.target, apply it to PATCH database: true -> false / false -> true
    todos = todos.map(todo => {
      const checkId = todo.id === +e.target.id ? !todo.completed : todo.completed;
      if (todo.id === +e.target.id) {
        let { completed } = todo;
        completed = !completed;
        axios.patch(`/todos/${todo.id}`, { completed })
          .then(() => {
          });
      }
      // .catch(console.log('error'));
      return Object.assign({}, todo, { completed: checkId });
    });
    assignValues(todos);
  });

  // when clicking 'x' button
  list.addEventListener('click', e => {
    if (e.target.nodeName !== 'SPAN' || e.target.parentNode === 'LABEL') return;

    // if e.target, apply it to PATCH database: true -> false / false -> true
    todos = todos.filter(todo => {
      if (todo.id === +e.target.dataset.id) {
        axios.delete(`/todos/${todo.id}`)
          .then(() => console.log('del button'));
      }
      return todo.id !== +e.target.dataset.id;
    });
    renderTodo(todos);
    assignValues(todos);
  });

  // when clicking tab in nav 'ul'
  document.querySelector('.nav').addEventListener('click', e => {
    if (!e.target || e.target.nodeName !== 'A') return;

    const navClass = document.querySelector('.nav');
    const navs = [].slice.call(navClass.childNodes);

    navs.forEach(nav => {
      if (nav.nodeName === 'LI') {
        nav.classList.remove('active');
      }
    });

    let selectedNav = e.target.parentNode;
    selectedNav.classList.add('active');

    if (selectedNav.id === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false);
      renderTodo(activeTodos);
    } else if (selectedNav.id === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed);
      renderTodo(completedTodos);
    } else {
      renderTodo(todos);
    }
  });


  // when entering todo at input box
  inputTodo.addEventListener('keyup', (e => {
    if (e.keyCode !== 13 || !inputTodo.value) return;
    addTodo(inputTodo.value); // 'a'
    inputTodo.value = '';
  }));


  // when browser is 'load'ed
  window.addEventListener('load', () => {

    initTodo();
  });
}(axios));
