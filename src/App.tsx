import { useSelector } from 'react-redux';
import './main.scss';
import LandingPage from './modules/landing-page';

function App() {
  const loading = useSelector((state: any) => state.products.isLoading);
  
  const className = loading ? 'App disabled-page' : 'App';

  return (
    <div className={className}>
      {/* Router */}
      <LandingPage />
    </div>
  );
}

export default App;
