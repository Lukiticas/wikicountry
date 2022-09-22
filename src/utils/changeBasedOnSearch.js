const changeBaseOnSearch = (list, words, setState) => {
  const newList = list.filter((el) => {
    const treated = Object.entries(el.translations);
    return treated.some((el) => el[1].includes(words));
  });
  setState(newList);
};

export default changeBaseOnSearch;
