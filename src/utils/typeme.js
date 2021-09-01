export const typeMe = (textArr, i, j, state, setState, setContext) => {
  //i place in the array, j place in the string
  //if there is no string at index i, return
  if (!textArr[i]) return;

  //if the currentLine is not flagged as the currentLine, update this
  if (!state[i].currentLine)
    setState([...state, (state[i].currentLine = true)]);

  //if j is less than the text array length, update the text state to include textArr[i][j]
  if (j < textArr[i].length)
    setState([...state, (state[i].text = textArr[i].slice(0, j + 1))]);

  //then set a timeout, call type me again, either updating i or j, return if i is >= textArr.length
  setTimeout(() => {
    if (j < textArr[i].length)
      typeMe(textArr, i, j + 1, state, setState, setContext);
    else {
      setContext(i + 1);
      if (i < textArr.length) {
        setState([...state, (state[i].currentLine = false)]);
        typeMe(textArr, i + 1, 0, state, setState, setContext);
      } else {
        return;
      }
    }
  }, 125);
};
