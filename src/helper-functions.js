export function sortByPoints(members) {
  const objArray = Object.entries(members);
  objArray.sort((a, b) => b[1].points - a[1].points);
  const backToObj = Object.fromEntries(objArray);
  
  return backToObj;
};

export function sortByName(members) {
  const objArray = Object.entries(members);
  objArray.sort((a, b) => {
    if (b[1].name > a[1].name) {return -1;}
    if (b[1].name < a[1].name) {return 1;}
    return 0;
  });
  const backToObj = Object.fromEntries(objArray);
  return backToObj;
};

export function sortBySurname(members) {
  const objArray = Object.entries(members);
  objArray.sort((a, b) => {
    if (b[1].surname > a[1].surname) {return -1;}
    if (b[1].surname < a[1].surname) {return 1;}
    return 0;
  });
  const backToObj = Object.fromEntries(objArray);

  return backToObj;
};
