interface WineProps {
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
      </div>
    </div>
  );
}
