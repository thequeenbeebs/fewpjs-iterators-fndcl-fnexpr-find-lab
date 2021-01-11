const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects) {
  let win = arrayOfObjects.find(e => e.result === "W")
  if (win) {
    return win.year
  }
}