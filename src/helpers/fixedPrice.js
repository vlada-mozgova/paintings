const checkDivides = (a, b) => a / b - ~~(a / b);
export const fixedPrice = (price) => {
  if (price === null) { return null }
  else {
    let fixedArr = [];
    String(price)
      .split("")
      .reverse()
      .forEach((item, index) => {
        if (checkDivides(index + 1, 3) === 0) {
          fixedArr.push(" " + item);
        } else {
          fixedArr.push(item);
        }
      });
    return fixedArr.reverse().join("") + " $";
  }
};