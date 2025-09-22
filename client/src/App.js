
// import FeaturedTypes from "./hooks/countByType";
// import CountByCity from "./hooks/useFetch";
// import react from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
  
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>








    // <div className="App">
    //   <h1>Booking App </h1>
    //   <section>
    //   <h2>Properties by City</h2>
    //   <CountByCity/>
    //   </section>
    //   <section>
    //     <h2>Properties by Type</h2>
    //     <FeaturedTypes/>
    //   </section>
      
      
    // </div>
  );
}

export default App;
