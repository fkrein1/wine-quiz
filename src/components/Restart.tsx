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
      className="flex m-auto mb-8 w-72 h-14 bg-gray-500 text-white rounded text-2xl items-center justify-center hover:border hover:bg-gray-600" 
    >
      Refazer Quiz
    </Link>
  );
}
