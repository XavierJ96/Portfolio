import { FaLinkedin, FaTwitter, FaGithub, FaThLarge } from "react-icons/fa"
import "./SocialIcons.css"

function Social(){
    return(
        <section className="icons">
            
                <ul className="icon">
                    <li className="icon-item"><a href="" className="icon-link"><FaGithub size="40px" /></a></li>
                    <li className="icon-item"><a href="" className="icon-link"><FaLinkedin size="40px" /></a></li>
                    <li className="icon-item"><a href="" className="icon-link"><FaTwitter size="40px" /></a></li>
                </ul>

        </section>
    )
}

export default Social