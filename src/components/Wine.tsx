interface WineProps {
  skuid: number;
  country: string;
  description: string;
  grape: string;
  title: string;
  region: string;
  image: {
    url: string;
  };
}

export function Wine(props: WineProps) {
  return (
    <div className="flex flex-col text-center items-center mx-8 md:flex-row md:items-start md:text-left">
      <img
        src={props.image.url}
        className="w-64 h-80 object-cover object-top md:w-80 md:h-96"
      />
      <div className="md:max-w-sm md:mt-16">
        <p className="text-xl font-bold md:text-2xl">{props.title}</p>
        <p className="text-lg md:text-xl">{props.grape}</p>
        <p className="text-lg md:text-xl">
          {props.region}, {props.country}
        </p>
        <p className="text-base md:text-base mt-2">{props.description}</p>
        <a
          href={`https://www.worldwine.com.br/checkout/cart/add?sc=1&sku=${props.skuid}&qty=1&seller=1`}
          target="_blank"
          className="flex w-52 h-14 mt-4 bg-purple-700 text-white rounded text-2xl items-center justify-center hover:border hover:bg-purple-800 m-auto md:mx-0"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
