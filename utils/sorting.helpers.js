export function sortAlphabetically(arr, key) {
  return arr.sort((a, b) => a[key].localeCompare(b[key]));
}

export function shuffleArray(arr) {
  let randomIdx;
  let currIdx = arr.length;

  while (currIdx != 0) {
    randomIdx = Math.floor(Math.random() * currIdx);
    currIdx--;

    [arr[currIdx], arr[randomIdx]] = [arr[randomIdx], arr[currIdx]];
  }

  return arr;
}
