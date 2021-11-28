import "./about.css";
import me2 from "../../img/portfolio2.png";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={me2} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    something nice about me will go here soon.
                </p>
                <p className="a-desc">
                    I will also put some more awesome stuff in here when i think
                    about it. i probably will use this sections for technologiesi use.
                </p>
                {/* <div className="a-tech">
                    <img src="" className="a-tech-img" />
                </div> */}
            </div>
        </div>
    )
}

export default About

