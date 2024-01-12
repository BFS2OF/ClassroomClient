import "./styles.css";
import Schule from "../media/bs2ab.png";
export const Navigation = () => {
    return (
        <header>
            <div className="header">
                <div className="header-left">
                    <img className="logo" width="70" src={Schule} />
                    <h1>Fragenportal <span className="Host">Host</span></h1>
                </div>

                <h1 className="MTLM">MTLM Product</h1>
            </div>
        </header>
    )
}