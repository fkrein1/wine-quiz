import wineSlice from "../redux/wineSlice";

interface WineProps {
  country: string;
  description: string;
  grape: string;
  title: string;
  region: string;
  image: {
    url: string;
  }
}

export function Wine(props: WineProps) {
  return (
    <div>
      <img src={props.image.url} className="w-40"/>
      <p>{props.title}</p>
      <p>{props.grape}</p>
      <p>{props.region}, {props.country}</p>
      <p>{props.description}</p>
    </div>
  );
}
