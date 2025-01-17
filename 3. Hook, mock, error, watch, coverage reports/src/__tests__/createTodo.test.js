import { mockTodo } from '../__mocks__/todos.mock';
import { createTodo, createTodoOnServer } from '../createTodo';

const mockedV4 = jest.fn(() => 'absd');

jest.mock('uuid', () => ({
  // ...jest.requireActual('uuid'), // если в тестируемом модуле используются ещё другие методы из библиотеки
  v4: () => mockedV4(),
})) // имплементация, имитирование метода v4

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve(mockTodo),
}))

describe('createTodo', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should return todo object with provided title, completed and id', () => {
    const title = 'Learn mock';
    const expectedResult = {
      id: 'absd',
      title,
      completed: false
    }

    const result = createTodo(title);

    expect(mockedV4).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expectedResult);
  });

  //! Способ 1 (выкидыввать ошибку)
  // it('should throw an error when no valid title is provided', () => {
  //   const fnToThrow = () => createTodo('');
    
  //   expect(fnToThrow).toThrow('title is required!'); 
  // });

  //! Способ 2 (выкидыввать ошибку)
  it('should throw an error when no valid title is provided', (done) => {
    try {
      createTodo('');
      done('createTodo should throw an error for invalid values')
    } catch (error) {
      expect(error.message).toBe('title is required!');
      done();
    }
  });

  it('should create todo on server', async () => {
    const result = await createTodoOnServer('new todo');

    expect(result).toEqual(mockTodo);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if there is a network error', async () => {
    fetch.mockRejectedValueOnce('Network error');

    await expect(createTodoOnServer('new todo'))
      .rejects
      .toMatch('Network error'); // выбрасывает ошибку
  });

  it('should throw error from fn when response not ok', async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    const fnToThrow = () => createTodoOnServer('new todo');
    
    expect(fnToThrow).rejects.toThrow('Cannot create todo'); 
  });
});
