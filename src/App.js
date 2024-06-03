import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Hero/Herosection";
import Herofinance from "./components/Hero/Herofinance";
import Advatnages from "./components/Advatnages/Advatnages";
import Customizable from "./components/Customizable/Customizable";
import Testimonial from "./components/Testimonial/Testimonial";
import Faq from "./components/Faq/Faq";
import Ready from "./components/Ready/Ready";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="w-full relative rounded-[50px] bg-white h-[5887px] overflow-hidden text-left text-lg text-black font-clash-display">
        <Navbar />
        <Herosection />
        <Herofinance />
        <Advatnages />
        <Customizable />
        <Testimonial />
        <Faq />
        <Ready />
        <Footer />
      </div>
      {/* <Navbar />
      <Herosection />
      <Herofinance />
      <Advatnages />
      <Customizable />
      <Testimonial />
      <Faq />
      <Ready />
      <Footer /> */}
      {/* <div className="w-full relative rounded-[50px] bg-white h-[5887px] overflow-hidden text-left text-lg text-black font-clash-display">
        
      </div> */}
    </>
  );
};

export default App;
