import axios from 'axios';

export async function getTodos() {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
