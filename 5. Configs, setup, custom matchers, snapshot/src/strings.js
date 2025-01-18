export const toUpperCase = (str) => str.toUpperCase();

export const toLowerCase = (str) => str.toLowerCase();

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const reverse = (str) => str.split('').reverse().join('');

export const trim = (str) => str.trim();

export const split = (str, separator) => str.split(separator);

export const join = (arr, separator) => arr.join(separator);

export const replace = (str, searchValue, replaceValue) =>
  str.replace(searchValue, replaceValue);

export const includes = (str, searchValue) => str.includes(searchValue);

export const startsWith = (str, searchValue) => str.startsWith(searchValue);

export const endsWith = (str, searchValue) => str.endsWith(searchValue);

export const charAt = (str, index) => str.charAt(index);

export const charCodeAt = (str, index) => str.charCodeAt(index);

export const fromCharCode = (code) => String.fromCharCode(code);

export const search = (str, regexp) => str.search(regexp);

export const indexOf = (str, searchValue) => str.indexOf(searchValue);

export const lastIndexOf = (str, searchValue) => str.lastIndexOf(searchValue);

export const slice = (str, start, end) => str.slice(start, end);

export const substring = (str, start, end) => str.substring(start, end);

export const substr = (str, start, length) => str.substr(start, length);

export const repeat = (str, count) => str.repeat(count);

export const padStart = (str, targetLength, padString) =>
  str.padStart(targetLength, padString);

export const padEnd = (str, targetLength, padString) =>
  str.padEnd(targetLength, padString);

export const toLocaleUpperCase = (str) => str.toLocaleUpperCase();

export const toLocaleLowerCase = (str) => str.toLocaleLowerCase();

export const localeCompare = (str, compareString) =>
  str.localeCompare(compareString);

export const normalize = (str, form) => str.normalize(form);

export const codePointAt = (str, index) => str.codePointAt(index);

export const concat = (str, ...args) => str.concat(...args);

export const matchAll = (str, regexp) => str.matchAll(regexp);
