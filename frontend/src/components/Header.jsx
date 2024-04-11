import {FaSignInAlt,FaUser} from "react-icons/fa";
import { Link } from "react-router-dom";


function HeaderApp (){
    return (
    <header className="header">
        <Link to="/">Supp Desk</Link>
        <ul>
            <li><Link to="/Login"><FaSignInAlt></FaSignInAlt>Login</Link></li>
            <li><Link to="/Register"><FaUser></FaUser>Register</Link></li>
           
        </ul>
    </header>
    )

}

export default HeaderApp;
