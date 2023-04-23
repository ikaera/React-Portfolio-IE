import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="header">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
