import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/pages/Project';
import PortfolioContainer from './components/PortfolioContainer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="porfolio">
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
