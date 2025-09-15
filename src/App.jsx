import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;