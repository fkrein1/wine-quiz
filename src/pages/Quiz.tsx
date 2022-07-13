import { useGetQuestionsQuery } from '../graphql/generated';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setMaxQuestions } from '../redux/quizSlice';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Answer } from '../components/Answer';

export function Quiz() {
  const { data } = useGetQuestionsQuery();
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(setMaxQuestions(data.questions.length));
  }, [data]);

  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center p-5">{data?.questions[currentQuestion].title}</h1>
      <div className="flex flex-wrap justify-center gap-4">
      {data?.questions[currentQuestion].answers.map((answer) => (
        <Answer 
          title={answer.title} 
          wineBody={answer.wineBody}
          redWineShare={answer.redWineShare}
          image={answer.image}
          key={answer.id}
        />
      ))}
      </div>
    </div>
  );
}
