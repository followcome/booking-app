 import "./header.css"
 const Header = () =>{
    return(
        <div className="header">
            <div className="headerContainer">
                <h1 className="headerTitle">Find your next stay</h1>
                <p className="headerDesc">Search deals on hotels,rooms and more...</p>
                <div className="headerSearch">
                    <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
                    <input type="text" placeholder="Check-in date" className="headerSearchInput"/>
                    <input type="text" placeholder="Check-out date" className="headerSearchInput"/>
                    <input type="number" placeholder="Guests" className="headerSearchInput"/>
                    <button className="headerBtn">Search</button>

                </div>
            </div>
        </div>
    )
}

export default Header;