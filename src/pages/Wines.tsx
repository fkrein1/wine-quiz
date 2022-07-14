import { useGetWinesQuery } from '../graphql/generated';
import { useAppSelector } from '../redux/hooks';
import { Wine } from '../components/Wine';
import { Header } from '../components/Header';
import { Checkout } from '../components/Checkout';
import { Restart } from '../components/Restart';

export function Wines() {
  const { data } = useGetWinesQuery();
  const redWineShare = useAppSelector((state) => state.wine.redWineShare);
  const wineBody = useAppSelector((state) => state.wine.wineBody);
  const winesToShow = 4;

  function redSelection() {
    if (!data) return [];
    const redsToShow = Math.round(winesToShow * redWineShare);
    const redWines = data?.wines
      .filter(
        (wine) => wine.type === 'red' && Math.abs(wine.body - wineBody) <= 3,
      )
      .sort(() => 0.5 - Math.random());
    return redWines?.slice(0, redsToShow);
  }

  function whiteSelection() {
    if (!data) return [];
    const whitesToShow = Math.round(winesToShow * (1 - redWineShare));
    const whiteWines = data?.wines
      .filter(
        (wine) => wine.type === 'white' && Math.abs(wine.body - wineBody) <= 3,
      )
      .sort(() => 0.5 - Math.random());

    return whiteWines?.slice(0, whitesToShow);
  }

  const wineSelection = [...redSelection(), ...whiteSelection()];

  return (
    <div>
      <Header />
      <h1 className="mt-5 text-3xl text-center">Sua seleção de vinhos...</h1>
      <div className="flex flex-col gap-3 justify-center mt-3 items-center md:flex-row md:gap-5">
        <Checkout wines={wineSelection} />
        <Restart />
      </div>
      {wineSelection.map((wine) => (
        <Wine
          country={wine.country}
          description={wine.description}
          grape={wine.grape}
          title={wine.title}
          region={wine.region}
          image={wine.image}
        />
      ))}
    </div>
  );
}
