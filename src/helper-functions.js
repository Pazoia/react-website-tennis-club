export function sortByPoints(obj) {
  const objArray = Object.entries(obj);
  objArray.sort((a, b) => Object.entries(b[1])[2][1] - Object.entries(a[1])[2][1]);
  const backToObj = Object.fromEntries(objArray);
  
  return backToObj;
};
