import { useHistory } from 'react-router-dom';

export const PageComponent = ({ title }) => {
  const history = useHistory();


  console.log('🚀 ~ file: PageComponent.jsx ~ line 5 ~ PageComponent ~ history', history)
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => {
        history.push('/');
        // history.replace('/');
      }}>Кнопка</button>
    </div>
  )
}
