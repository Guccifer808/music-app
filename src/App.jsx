import Discover from './components/Discover';
import Header from './components/Header';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import Search from './components/Search';

function App() {
  return (
    <div className='App text-stone-100 overflow-hidden'>
      <Header />
      <Hero />
      <Discover />
      <Search />
      <MusicPlayer />
    </div>
  );
}

export default App;
