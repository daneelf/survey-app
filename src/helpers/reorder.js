import {UP,DOWN} from '../constants';

export const reorder = (items, index, direction) => {
  // const items = [...questionsData];
  const position = index;
  console.log(position);
  if (position < 0) {
    throw new Error("Given item not found.");
  } else if (
    (direction === UP && position === 0) ||
    (direction === DOWN && position === items.length - 1)
  ) {
    return;
  }

  const item = items[position];
  const newItems = items.filter((i, index) => index !== position);
  newItems.splice(position + direction, 0, item);
  return newItems;
};
