import CartWidget from "../CartWidget";
import NavIcon from "../../assets/NavIcon.jpg";

const NavBar = () =>{
    return(
        <nav className="navBar">
            <ul>
                <li><a href="#"><img src={NavIcon} alt="gpu-icon" /></a></li>
                <li><a className="hide" href="#">bla</a></li>
                <li><a className="hide" href="#">blabla</a></li>
                <li><a className="hide" href="#">blablabla</a></li>
                <li><a className="hide" href="#"><CartWidget /></a></li>
            </ul>
        </nav>
    )
};

export default NavBar;