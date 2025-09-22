 import CountByCity from "../components/featuredCity"
import Header from "../components/Headers";
import Navbar from "../components/Navbar";
 import FeaturedType from "../components/propertyList"
 
 const Home = ()=>{
    return(
        <diV >
            <Navbar/>
            <Header/>
            
            <h1>Booking App </h1>
      <section>
       <h2>Properties by City</h2>
      <CountByCity/>
      </section>
      <section>
         <h2>Properties by Type</h2>
    <FeaturedType/>
      </section>
        </diV>
    )
}
export default Home;