import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import { toast, Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">

          <Toaster
            toastOptions={{
              className: "",
              duration: 9000,
              style: {
                background: "#6674cc",
                color: "#fff",
              },

              success: {
                duration: 5000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />

      <Navbar/>
      <Landing/>
      <About/>
      <Footer/>

      <div className="calling-div">
        <a href="tel:+919821729983"><i className="fa-solid fa-phone"></i></a>
      </div>
    
    </div>
  );
}

export default App;
