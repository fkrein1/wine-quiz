import { useGetWinesQuery } from '../graphql/generated';
import { Header } from '../components/Header';

export function Wines() {
  const { data } = useGetWinesQuery();
  console.log(data);

  return (
    <div>
      <Header />
      <h1>Wines</h1>
    </div>
  );
}
