// import { profileImage } from "../images/ProfileImage.png";
import profileImage from "../images/ProfileImage.png"
import '../style.css';

export default function AboutMe() {

    return (
        <>
            <div className="wrap">

                <img fluid src={profileImage} alt="profile picture" width="200px" />
                <p className="Abt">
                    My name is Nicco, I currently work at Apple as a Genius technician fixing computers, phones and other apple products.
                    I am working towards improving my web development knowledge including Javascript, html, css and various
                    frameworks such a react and bootstrap as graduate of the full stack development bootcamp from Columbia university.
                </p>
            </div>
        </>

    );
}