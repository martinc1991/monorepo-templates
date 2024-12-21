import useSWR from 'swr';
import './App.css';
import { fetcher } from './lib/fetcher';

// DELETE:
export interface TestData {
  success: boolean;
  status: number;
  code: string;
  timestamp: string;
  data: {
    message: string;
    baseUrl: string;
    url: string;
  };
}

function App() {
  const { data, error, isLoading } = useSWR<TestData>('/test', fetcher);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Monorepo template</h1>

      <p>API is running at: {data?.data.url}</p>
    </div>
  );
}

export default App;
