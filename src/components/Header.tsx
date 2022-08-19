import logo from '../assets/logo-quiz.png'

export function Header() {
  return (
    <div className="text-3xl p-1 text-center border-b-2 flex justify-center">
      <img src={logo} className="h-16"/>
    </div>
  );
}
