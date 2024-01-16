import "./styles.css";
import Schule from "@/common/assets/img/bs2ab.png";

export const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header-left">
                    <img className="logo" width="70" src={Schule} />
                    <h1>Fragenportal <span className="Host">Host</span></h1>
                </div>

                <h2>MTLM Product</h2>
            </div>
        </header>
    );
}

export class Header2 {
}