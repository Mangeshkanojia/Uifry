import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Hero/Herosection";
import Herofinance from "./components/Hero/Herofinance";
function App() {
  return (
    <div className="bg-white ">
      <Navbar/>
      <Herosection/>
      <Herofinance/>
    </div>
  );
}

export default App;
