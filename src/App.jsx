import Discover from './components/Discover';
import Download from './components/Download';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';

function App() {
  return (
    <div className='App text-stone-100 overflow-hidden'>
      <Header />
      <Hero />
      <Discover />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
