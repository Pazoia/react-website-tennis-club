export function sortByPoints(members) {
  const objArray = Object.entries(members);
  objArray.sort((a, b) => Object.entries(b[1])[2][1] - Object.entries(a[1])[2][1]);
  const backToObj = Object.fromEntries(objArray);
  
  return backToObj;
};

export function sortByName(members) {
  const objArray = Object.entries(members);
  objArray.sort((a, b) => {
    if (Object.entries(b[1])[0][1] > Object.entries(a[1])[0][1]) {return -1;}
    if (Object.entries(b[1])[0][1] < Object.entries(a[1])[0][1]) {return 1;}
    return 0;
  });
  const backToObj = Object.fromEntries(objArray);
  
  return backToObj;
};

export function sortBySurname(members) {
  const objArray = Object.entries(members);
  objArray.sort((a, b) => {
    if (Object.entries(b[1])[1][1] > Object.entries(a[1])[1][1]) {return -1;}
    if (Object.entries(b[1])[1][1] < Object.entries(a[1])[1][1]) {return 1;}
    return 0;
  });
  const backToObj = Object.fromEntries(objArray);
  
  return backToObj;
};
