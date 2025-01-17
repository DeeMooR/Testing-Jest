import { getLength } from '../getLength';

describe('getLength', () => {
  it('should return 0 for an empty array', () => {
    const res = getLength([]);

    expect(res).toBe(0);
  });

  it('should return 3 for an array with 3 elements', () => {
    const res = getLength([1, 2, 3]);

    expect(res).toBe(3);
  });

  it('should return 5 for an array with 5 elements', () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });
});

describe.skip('alias and hooks', () => {
  //! Хуки
  beforeAll(() => {
    console.log('basic setup');
  })
  afterAll(() => {
    console.log('clean up');
  })
  beforeEach(() => {})
  afterEach(() => {})

  it('should return 3', () => expect(3).toBe(3))

  //! Алиасы и возможности
  // it === test
  // it.skip === xit
  // it.only === fit
  // it.todo
  // it.concurrent (для async)
})
