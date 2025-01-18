import * as string from './strings';

export const toKebabCase = (word) => {
  return string.toLowerCase(string.split(word, ' ').join('-'));
};

export const toSnakeCase = (word) => {
  return string.toLowerCase(string.split(word, ' ').join('_'));
};

export const toCamelCase = (word) => {
  return string
    .split(string.toLowerCase(word), ' ')
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return string.capitalize(word);
    })
    .join('');
};

export const toPascalCase = (word) => {
  return string
    .split(word, ' ')
    .map((word) => {
      return string.capitalize(word);
    })
    .join('');
};
