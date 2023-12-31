import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Genre} from "./components/Pages/genre";
import Read from "./components/Pages/manga card/read/read";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import { useState ,useEffect} from "react";
import GoogleDrivePDF from "./components/Pages/manga-pdf/mangaPDF";
import LoginSignup from "./components/Login-Signup/LoginSignup";



function App() {

const [x,setx]=useState(0)
const [data,setdata] = useState('');


useEffect(() => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('userInfo='))
    ?.split('=')[1];

  

  if (cookieValue) {
    const data = JSON.parse(decodeURIComponent(cookieValue));
    setdata(data);
    setx(1);
  } else {
    setx(2);
  }
}, [x]);



return (
  <>
    {x === 0 ? (
      <div>Loading...</div>
    ) : x === 2 ? (
      <Router>
        <div className="pages">
          <Routes>
          <Route path='/' element={<LoginSignup/>}></Route>
           
          </Routes>
        </div>
      </Router>
    ) : (
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/:title/read" element={<Read />} />
            <Route path='/test' element={<GoogleDrivePDF data={data} />}></Route>
          </Routes>
        </div>
        <div style={{ marginTop: '20rem' }}></div>
        <Footer />
      </Router>
    )}
  </>
);

}

export default App;
