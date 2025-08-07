const items = document.querySelectorAll("#todo-list li");

items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("completed");
  });
});

