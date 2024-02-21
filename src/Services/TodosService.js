export const TodosService = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos");
    const data = await res.json();
    const todoData = data.todos;
    const TodoItems = [];
    console.log("Todo list: " + data)
    for (const key in data) {
      if (todoData.hasOwnProperty(key)) {
        TodoItems.push({
          id: data[key].id,
          todo: data[key].todo,
          completed: data[key].completed,

        })
      }
    }
    return TodoItems;
  } catch (error) {
    return Promise.reject(error)
  }
}