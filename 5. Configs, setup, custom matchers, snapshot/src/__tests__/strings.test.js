import * as str from '../strings';

describe('strings', () => {
  it('reverse', () => {
    expect(str.reverse('hello')).toBe('olleh');
  });

  it('trim', () => {
    expect(str.trim(' hello ')).toBe('hello');
  });

  it('split', () => {
    expect(str.split('hello', 'e')).toEqual(['h', 'llo']);
  });

  it('join', () => {
    expect(str.join(['h', 'llo'], 'e')).toBe('hello');
  });

  it('replace', () => {
    expect(str.replace('hello', 'e', 'a')).toBe('hallo');
  });

  it('includes', () => {
    expect(str.includes('hello', 'e')).toBe(true);
  });

  it('startsWith', () => {
    expect(str.startsWith('hello', 'h')).toBe(true);
  });

  it('endsWith', () => {
    expect(str.endsWith('hello', 'o')).toBe(true);
  });

  it('charAt', () => {
    expect(str.charAt('hello', 1)).toBe('e');
  });

  it('charCodeAt', () => {
    expect(str.charCodeAt('hello', 1)).toBe(101);
  });

  it('fromCharCode', () => {
    expect(str.fromCharCode(101)).toBe('e');
  });

  it('search', () => {
    expect(str.search('hello', /l+/)).toBe(2);
  });

  it('indexOf', () => {
    expect(str.indexOf('hello', 'l')).toBe(2);
  });

  it('lastIndexOf', () => {
    expect(str.lastIndexOf('hello', 'l')).toBe(3);
  });

  it('slice', () => {
    expect(str.slice('hello', 1, 3)).toBe('el');
  });

  it('substring', () => {
    expect(str.substring('hello', 1, 3)).toBe('el');
  });

  it('substr', () => {
    expect(str.substr('hello', 1, 3)).toBe('ell');
  });

  it('repeat', () => {
    expect(str.repeat('hello', 3)).toBe('hellohellohello');
  });

  it('padStart', () => {
    expect(str.padStart('hello', 10, 'a')).toBe('aaaaahello');
  });

  it('padEnd', () => {
    expect(str.padEnd('hello', 10, 'a')).toBe('helloaaaaa');
  });

  it('toLocaleUpperCase', () => {
    expect(str.toLocaleUpperCase('hello')).toBe('HELLO');
  });

  it('toLocaleLowerCase', () => {
    expect(str.toLocaleLowerCase('HELLO')).toBe('hello');
  });

  it('localeCompare', () => {
    expect(str.localeCompare('hello', 'hello')).toBe(0);
  });

  it('normalize', () => {
    expect(str.normalize('héllô', 'NFD')).toBe('héllô');
  });

  it('toUpperCase', () => {
    expect(str.toUpperCase('hello')).toBe('HELLO');
  });

  it('toLowerCase', () => {
    expect(str.toLowerCase('HELLO')).toBe('hello');
  });

  it('capitalize', () => {
    expect(str.capitalize('hello')).toBe('Hello');
  });

  it('includes', () => {
    expect(str.includes('hello', 'e')).toBe(true);
  });
});
