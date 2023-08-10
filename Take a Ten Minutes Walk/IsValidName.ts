const isValidName = (walk) => {
  if (walk.length !== 10) {
    return false;
  }

  let x = 0;
  let y = 0;

  for (let step of walk) {
    switch (step) {
      case 'n':
        y += 1;
        break;
      case 's':
        y -= 1;
        break;
      case 'w':
        y += 1;
        break;
      case 'e':
        y -= 1;
        break;
      default:
        return false;
      }
  }
  return x === 0 && y === 0;
}

export default isValidName;