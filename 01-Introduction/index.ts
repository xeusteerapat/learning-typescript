import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Interface is used to define the structure of the object.
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo; // cache an error by define todo as Todo

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // console.log(`
  //   The Tooo with ID: ${id}
  //   Titile is: ${title}
  //   Is it finished?: ${completed}
  // `);

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Tooo with ID: ${id}
    Titile is: ${title}
    Is it finished?: ${completed}
  `);
};
