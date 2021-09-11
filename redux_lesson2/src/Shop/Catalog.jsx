import { useSelector } from 'react-redux';
import { Card } from './Card';
import './Catalog.scss';

export const Catalog = () => {
  const catalogItems = useSelector((state) => state.catalogItems);
  console.log(
    '🚀 ~ file: Catalog.jsx ~ line 6 ~ Catalog ~ catalogItems',
    catalogItems
  );
  return (
    <div>
      <ul className='catalog'>
        {catalogItems?.map((card) => (
          <Card key={card?.id} className='catalog-item' item={card} />
        ))}
      </ul>
    </div>
  );
};
