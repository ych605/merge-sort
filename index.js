export const mergeSort = list => {
  const newList = [...list];
  if (newList.length <= 1) return newList;
  const mid = Math.ceil(newList.length / 2);
  const left = mergeSort(newList.slice(0, mid))
  const right = mergeSort(newList.slice(mid))
  const tList = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      tList.push(left.shift())
    } else {
      tList.push(right.shift())
    }
  }
  return [...tList, ...left, ...right]
}
