const changeBasedOnRegion = (list, region, setState) => {
  const newList = list.filter((el) => el.region === region);
  setState(region === "none" ? [] : newList);
};

export default changeBasedOnRegion;
