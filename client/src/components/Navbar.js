 import "./navbar.css"
 const Navbar = ()=>{
    return(
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <span className="logo">BookingApp</span>
                    <div className="navItems">
                        <button className="navButton">Registration</button>
                        <button className="navButton">Login</button>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Navbar;