import facebook from './images/facebook.jpeg';
import linkIn from './images/linkIn.png';
import medium from './images/medium.png';
import quora from './images/quora.png';
import twitter from './images/twitter.png';
import "./App.css";

export default function Footer() {
    return (
        <div className="--footer-section">
            <ul className="--footer-list">
                <li><a href="https://www.facebook.com/moses.oyet.733/"><img src={ facebook } alt="" /></a></li>
                <li><a href="https://twitter.com/MosesOyetDavid1"><img src={ twitter } alt="" /></a></li>
                <li><a href="https://medium.com/@Moses_Oyet"><img src={ medium } alt="" /></a></li>
                <li><a href="https://www.quora.com/profile/Moses-Oyet-David"><img src={ quora } alt="" /></a></li>
                <li><a href="https://www.linkedin.com/in/trick-maxillar-212831213/"><img src={ linkIn } alt="" /></a></li>
            </ul>
        </div>
    )
}