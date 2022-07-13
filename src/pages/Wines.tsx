import { useGetWinesQuery } from '../graphql/generated';
import { Header } from '../components/Header';

export function Wines() {
  const { data: wines } = useGetWinesQuery();
  console.log(wines);

  return (
    <div>
      <Header />
      <h1>Wines</h1>
    </div>
  );
}
