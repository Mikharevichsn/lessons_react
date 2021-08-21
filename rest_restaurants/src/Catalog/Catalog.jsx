import { Item } from './Item';

export const Catalog = ({ restaurants = [], setRestaurants }) => {
  return (
    <ul>
      {restaurants &&
        restaurants.map((restaurant) => <Item setRestaurants={setRestaurants} {...restaurant} />)}
    </ul>
  );
};
