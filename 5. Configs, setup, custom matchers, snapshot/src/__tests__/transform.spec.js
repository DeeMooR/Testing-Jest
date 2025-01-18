import * as transform from '../transform';

describe('transform', () => {
  it('should transform the input toKebabCase', () => {
    const result = transform.toKebabCase('Hello World');
    expect(result).toBe('hello-world');

    const result2 = transform.toKebabCase('Hello World Again');
    expect(result2).toBe('hello-world-again');
  });

  it('should transform the input toSnakeCase', () => {
    const result = transform.toSnakeCase('Hello World');
    expect(result).toBe('hello_world');

    const result2 = transform.toSnakeCase('Hello World Again');
    expect(result2).toBe('hello_world_again');
  });

  it('should transform the input toCamelCase', () => {
    const result = transform.toCamelCase('Hello World');
    expect(result).toBe('helloWorld');

    const result2 = transform.toCamelCase('Hello World Again');
    expect(result2).toBe('helloWorldAgain');
  });

  it('should transform the input toPascalCase', () => {
    const result = transform.toPascalCase('Hello World');
    expect(result).toBe('HelloWorld');

    const result2 = transform.toPascalCase('Hello World Again');
    expect(result2).toBe('HelloWorldAgain');
  });
});
