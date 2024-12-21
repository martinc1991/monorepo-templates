import './App.css';
import { useAPI } from './hooks/use-api';

interface TestData {
  message: string;
  baseUrl: string;
  url: string;
}

function App() {
  const { data, error, isLoading } = useAPI<TestData>('/test');

  if (error) return <div>Error</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Monorepo template</h1>

      <p>
        API is running at: <a href={data.data.baseUrl}>{data.data.baseUrl}</a>
      </p>
    </div>
  );
}

export default App;
