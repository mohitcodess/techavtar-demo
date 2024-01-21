import Navbar from "./components/Navbar";
import VideoImage from './assets/video.png';
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#070405] text-white font-['Inter']">
      <Navbar />

      {/* Hero */}

      <div className="flex p-12 flex-wrap">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <p className="text-5xl text-center">
            AUTOMATE CUSTOM <br /> 
            EMAIL REPLIES AT THE  <br />
            TOUCH OF A BUTTON
          </p>
          <button className="text-white bg-[#FF8794] p-4 rounded-lg text-4xl mt-12 ">Get Started For Free </button>

        </div>
        <div className="w-1/2 h-full p-8">
          <img src={VideoImage} alt="video" />
        </div>
      </div>


      <div className="">
        <p className="text-center text-5xl"> 
          Our mission is to automate your email experience <br/> with a personalized touch.
        </p>


        <p className=" text-center mt-8 w-4/5 mx-auto p-4 px-8 font-light text-4xl" >
          Effortlessly generate tailored replies by analyzing incoming emails <br /> with a single click. Experience the power of ReplyPal for <span className="font-bold"> FREE </span> . Your <br /> ultimate email efficiency tool!
        </p>
      </div>


      <div className="flex gap-28 p-8 px-16">
        <Card title="FREE FOR LIFE" text="Enjoy the power of ReplyPal for FREE, allowing you to send up to 300 emails per month at no cost. Our goal is to bring  the power of productivity accessible to all!"/>
        <Card title="CUSTOM REPLY" text="Our intuitive AI allows you to choose your reply style & crafts a custom response by analyzing the incoming email. No more cookie cutter responses!"/>
        <Card title="OUR TEAM" text="Our small team is dedicated to delivering you a great product. Choosing us supports independent creators, not big corporations. Thank you for your invaluable support!" />
      </div>

      <button className="block text-4xl text-[#FF8794] bg-white px-16 p-4 rounded-lg  mx-auto  mt-12 ">Try ReplyPal For Free</button>

      <Footer/>
    </div>

  );
}

export default App;