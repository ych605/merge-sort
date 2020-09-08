export const mergeSort = list => {
  if (list.length <= 1) return list;
  const mid = Math.ceil(list.length / 2);
  const left = mergeSort(list.slice(0, mid))
  const right = mergeSort(list.slice(mid))
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