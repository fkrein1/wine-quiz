import { useGetQuestionsQuery } from '../graphql/generated';
import { Header } from '../components/Header';

export function Quiz() {
  const { data } = useGetQuestionsQuery();
  console.log(data);

  return (
    <div>
      <Header />
      <h1>Questions</h1>
    </div>
  );
}
