// 이 파일은 오늘의 할 일 추가, 완료, 삭제, 저장 기능을 담당한다.

// HTML에서 체크리스트에 필요한 요소를 찾아 변수에 저장한다.
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const todoEmpty = document.querySelector("#todo-empty");
const todoCount = document.querySelector("#todo-count");
const todoProgressBar = document.querySelector("#todo-progress-bar");

// localStorage에서 사용할 이름이다. 같은 사이트의 다른 저장값과 구분할 수 있다.
const TODO_STORAGE_KEY = "skala-today-todos";

// 현재 사용 중인 날짜와 할 일 배열을 메모리에 보관한다.
let activeDate = getLocalDateKey();
let todos = loadTodos();

// UTC가 아닌 브라우저의 현지 날짜를 YYYY-MM-DD 형식으로 만든다.
function getLocalDateKey() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

// 저장된 JSON 문자열을 객체로 바꾸고, 오늘 작성한 목록만 불러온다.
function loadTodos() {
    try {
        const savedData = JSON.parse(localStorage.getItem(TODO_STORAGE_KEY));

        if (savedData && savedData.date === activeDate && Array.isArray(savedData.items)) {
            return savedData.items;
        }
    } catch (error) {
        // 저장값이 손상되거나 저장소를 사용할 수 없으면 빈 목록으로 시작한다.
        console.error("할 일 목록을 불러오지 못했습니다.", error);
    }

    return [];
}

// 배열을 JSON 문자열로 변환해 새로고침 후에도 남도록 저장한다.
function saveTodos() {
    try {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify({
            date: activeDate,
            items: todos
        }));
    } catch (error) {
        console.error("할 일 목록을 저장하지 못했습니다.", error);
    }
}

// 체크박스와 글자를 연결한 한 개의 목록 요소를 만든다.
function createTodoElement(todo) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const textLabel = document.createElement("label");
    const deleteButton = document.createElement("button");
    const checkboxId = `todo-${todo.id}`;

    listItem.className = todo.completed ? "todo-item todo-item--completed" : "todo-item";
    listItem.dataset.id = todo.id;

    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    checkbox.className = "todo-checkbox";
    checkbox.checked = todo.completed;

    textLabel.className = "todo-text";
    textLabel.htmlFor = checkboxId;
    // textContent를 사용하면 입력한 문장이 HTML 코드로 실행되지 않는다.
    textLabel.textContent = todo.text;

    deleteButton.type = "button";
    deleteButton.className = "todo-delete-button";
    deleteButton.textContent = "삭제";

    listItem.append(checkbox, textLabel, deleteButton);
    return listItem;
}

// 배열의 현재 상태를 목록, 완료 개수, 진행률에 모두 반영한다.
function renderTodos() {
    todoList.replaceChildren();

    todos.forEach((todo) => {
        todoList.append(createTodoElement(todo));
    });

    const completedCount = todos.filter((todo) => todo.completed).length;
    const progressPercentage = todos.length === 0
        ? 0
        : Math.round((completedCount / todos.length) * 100);

    todoCount.textContent = `${completedCount} / ${todos.length} 완료`;
    todoProgressBar.style.width = `${progressPercentage}%`;
    todoEmpty.hidden = todos.length > 0;
}

// 폼을 제출하면 입력값을 새로운 객체로 만들어 배열에 추가한다.
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (!todoText) {
        return;
    }

    todos.push({
        id: Date.now(),
        text: todoText,
        completed: false
    });

    saveTodos();
    renderTodos();
    todoForm.reset();
    todoInput.focus();
});

// change 이벤트는 체크박스의 완료 상태가 바뀌었을 때 발생한다.
todoList.addEventListener("change", (event) => {
    if (!event.target.matches(".todo-checkbox")) {
        return;
    }

    const todoItem = event.target.closest(".todo-item");

    if (!todoItem) {
        return;
    }

    const todoId = Number(todoItem.dataset.id);
    const selectedTodo = todos.find((todo) => todo.id === todoId);

    if (selectedTodo) {
        selectedTodo.completed = event.target.checked;
    }

    saveTodos();
    renderTodos();
});

// 이벤트 위임을 사용하면 새로 만들어진 삭제 버튼도 같은 이벤트로 처리할 수 있다.
todoList.addEventListener("click", (event) => {
    if (!event.target.matches(".todo-delete-button")) {
        return;
    }

    const todoItem = event.target.closest(".todo-item");

    if (!todoItem) {
        return;
    }

    const todoId = Number(todoItem.dataset.id);
    todos = todos.filter((todo) => todo.id !== todoId);

    saveTodos();
    renderTodos();
});

// 자정이 지나 날짜가 바뀌면 이전 날짜 목록 대신 오늘 목록으로 전환한다.
setInterval(() => {
    const currentDate = getLocalDateKey();

    if (currentDate !== activeDate) {
        activeDate = currentDate;
        todos = loadTodos();
        renderTodos();
    }
}, 60 * 1000);

// 페이지를 처음 열었을 때 저장되어 있던 오늘 목록을 표시한다.
renderTodos();
