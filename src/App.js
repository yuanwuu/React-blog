import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'


function App() {
  return (
    <div className={StyleSheet.App}>
      <div className = "body">
      <Header />
      <Article />
      <Footer />
      </div>
    </div>
  );
}

export default App;
