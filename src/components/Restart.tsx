import { Link } from 'react-router-dom';
import { resetQuiz } from '../redux/quizSlice';
import { resetWineBody } from '../redux/wineSlice';
import { useAppDispatch } from '../redux/hooks';

export function Restart() {
  const dispatch = useAppDispatch();

  function handleRestart() {
    dispatch(resetQuiz());
    dispatch(resetWineBody());
  }

  return (
    <Link
      onClick={handleRestart}
      to="/"
      className="flex w-40 h-12 bg-gray-500 text-white rounded text-xl items-center justify-center hover:border hover:bg-gray-600" 
    >
      Refazer Quiz
    </Link>
  );
}
