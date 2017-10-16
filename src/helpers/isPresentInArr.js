function isPresentInArr(arr, obj) {
  if (!arr.length) {
    return false
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === obj.id) {
      return true
    }
  }

  return false
}

export default isPresentInArr
