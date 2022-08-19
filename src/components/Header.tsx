import logo from '../assets/logo-quiz.png'

export function Header() {
  return (
    <div className="text-3xl pb-2 pt-3 text-center border-b-2 flex justify-center">
      <img src={logo} className="h-24"/>
    </div>
  );
}
