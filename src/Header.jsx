import './App.css';
const Header=()=>{
    return(
        <div className="header">
            <div className="left">
                <img src="Logo.jpeg"/>
                </div>
                <div className="center">
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        </ul>
                        </div>
                <div className="search">
                <input type="text" placeholder="search"/>
                <button>search</button>
                </div>
                <div className="right">
                <div className="sign">
                    Sign in / Sign up
                </div>
                <div className="cart">
                    <button>cart</button>
                </div>
                 </div>
            </div>
            )
        }
    export default Header;