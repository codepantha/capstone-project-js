const itemCounter = (items) => {
  const counterElement = document.querySelector('.items-count');
  counterElement.innerText = `Characters: ${items.length}`;
  return items.length;
};

export default itemCounter;