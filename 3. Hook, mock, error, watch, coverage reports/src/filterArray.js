export function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
