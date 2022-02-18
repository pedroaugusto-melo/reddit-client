import MenuDesktop from '../components/menu-desktop/MenuDesktop';
import MenuMobile from '../components/menu-mobile/MenuMobile';
import Posts from '../features/posts/Posts';
import './App.css';

function App() {
  return (
    <div className="App" id='dark'>
      <MenuMobile />
      <MenuDesktop />
      <Posts />
    </div>
  );
}

export default App;
