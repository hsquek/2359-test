// returns false if not present in array; returns index (one-based)
function isPresentInArr (arr, obj) {
  if (!arr.length) {
    return false
  }

  for (var i = 1; i <= arr.length; i++) {
    if (arr[i-1].id === obj.id) {
      return i
    }
  }

  return false
}

export default isPresentInArr
