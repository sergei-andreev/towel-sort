
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []

  const result = []
  let isReverse = false

  for (const arr of matrix) {
    isReverse ? result.push(arr.reverse()) : result.push(arr)
    isReverse = !isReverse
  }

  return result.flat()
}
