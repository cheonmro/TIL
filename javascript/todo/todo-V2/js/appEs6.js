(() => {
  let todos = [];

  // input and checkbox
  const inputTodo = document.querySelector('#input-todo');
  const list = document.querySelector('#todo-list');
  const markAll = document.querySelector('#chk-allComplete');

  // tab
  const allTab = document.querySelector('#all');
  const activeTab = document.querySelector('#active');
  const completedTab = document.querySelector('#completed');

  // count completed and items left
  const countTodos = document.querySelector('#completedTodos');
  const countItemsLeft = document.querySelector('#activeTodos');

  // clear button
  const clearBtn = document.querySelector('#btn-removeCompletedTodos');

  // when render html
  const renderHtml = (_todos) => {
    list.innerHTML = '';

    _todos.forEach((todo) => {
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

  // assign values for completed and items left
  const assignValues = (_todos) => {
    const numOfCompleted = _todos.filter(todo => (todo.completed === true)).length;
    countTodos.textContent = numOfCompleted;

    const numOfItemsLeft = _todos.filter(todo => (todo.completed === false)).length;
    countItemsLeft.textContent = numOfItemsLeft;
  };

  // when entering todo at input box
  const addTodo = (val) => {
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

    // add new todo to initial todos
    todos = [newTodo].concat(todos);

    // render html
    renderHtml(todos);

    // assign values for initial completed and items left
    assignValues(todos);
  };

  // remove the color of all tabs and add color to other tab clicked
  const addColorToTab = (tab) => {
    // remove tab color
    const tabs = [allTab, activeTab, completedTab];
    tabs.forEach((_li) => {
      _li.className = '';
    });

    tab.className = 'active';
  };

  // when entering todo at input box
  inputTodo.addEventListener('keyup', (e) => {
    if (e.keyCode !== 13 || !inputTodo.value) return;
    addTodo(inputTodo.value); // 'a'
    inputTodo.value = '';
  });

  // when clicking all tab
  allTab.addEventListener('click', () => {
    const allTodo = todos.map(todo => Object.assign({}, todo));
    renderHtml(allTodo);
    addColorToTab(allTab);
  });

  // when clicking active tab
  activeTab.addEventListener('click', () => {
    const activeTodo = todos.filter(todo => todo.completed === false);
    renderHtml(activeTodo);
    addColorToTab(activeTab);
  });

  // when clicking completed tab
  completedTab.addEventListener('click', () => {
    const completedTodo = todos.filter(todo => todo.completed === true);
    renderHtml(completedTodo);
    addColorToTab(completedTab);
  });

  // when clicking input checkbox
  list.addEventListener('change', (e) => {
    if (e.target.nodeName !== 'INPUT') return;
    todos = todos.map((todo) => {
      const checkId = todo.id === +e.target.id ? !todo.completed : todo.completed;
      return Object.assign({}, todo, { completed: checkId });
    });
    assignValues(todos);
  });

  // when clicking 'x' button
  list.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'SPAN' || e.target.parentNode === 'LABEL') return;

    todos = todos.filter((todo => todo.id !== +e.target.dataset.id));

    renderHtml(todos);

    assignValues(todos);
  });

  // when clicking mark all
  markAll.addEventListener('change', () => {
    const checkedState = markAll.checked ? markAll.checked : false;
    todos = todos.map(todo => Object.assign({}, todo, { completed: (checkedState) }));

    renderHtml(todos);

    assignValues(todos);
  });

  // when clicking clear button
  clearBtn.addEventListener('click', () => {
    const clearCompleted = todos.filter(todo => todo.completed === false);

    renderHtml(clearCompleted);
  });

  // when browser is 'load'ed
  window.addEventListener('load', () => {
    todos = [
      { id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: false },
      { id: 3, content: 'JS', completed: false }
    ];

    // render initial html page
    renderHtml(todos);

    // assign initial values for completed and items left
    assignValues(todos);
  });
})();
