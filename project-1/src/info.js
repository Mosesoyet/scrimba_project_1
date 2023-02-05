import profile from "./images/profile.jpg";
import gitub from './images/github.png';
import gmail from './images/gmail.png';
import "./App.css";

export default function Info() {
    return (
        <div className="--info">
            <div className="--image">
                <img src={ profile } alt=""/>
            </div>
            <div className="--name">
                <h2>Moses Oyet David</h2>
                <p>Full Stack Developer</p>
                <p><i>Have a project?</i><br />Click!!</p>
            </div>
            <div className="--button">
                <button className="--email"><a href="mailto:trickmaxillar@gmail.com"><img src={ gmail } alt="" /></a></button>
                <button className="--linkIn"><a href="https://github.com/Mosesoyet"><img src={ gitub } alt="" /></a></button>
            </div>
        </div>
    )
}