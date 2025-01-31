import './App.css';
import { Activity } from './pages/Activity';
import { Ask } from './pages/Ask';
import { Food } from './pages/Food';
import { No } from './pages/No';
import { Result } from './pages/Result';
import { Yes } from './pages/Yes';
import { useStore } from './store';

function App() {
  const page = useStore((state) => state.page);

  if (page === 'yes') {
    return <Yes />;
  }

  if (page === 'no') {
    return <No />;
  }

  if (page === 'food') {
    return <Food />;
  }

  if (page === 'activity') {
    return <Activity />;
  }

  if (page === 'result') {
    return <Result />;
  }

  return <Ask />;
}

export default App;
