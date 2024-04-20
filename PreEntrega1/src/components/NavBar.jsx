import logo from "../assets/images/LogoJohnnieWalker.svg"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="container-fluid">
            <div className="row bg-black">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="Johnnie" width={500} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row bg-dark py-2">
                <div className="col">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="#">INICIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="#">WHISKYS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="#">HABANOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-warning" href="#">REGALOS</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar;