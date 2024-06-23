import React from "react";

import { introText } from "../constants"; 
// import jms from "../assets/img/jmsyaya.png";


const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">{introText.title[0]}</h1>
                <h2 className="intro__title2">프론트엔드&nbsp;개발자&ensp;<span className="intro__title3">정명식</span>&nbsp;입니다.</h2>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro__text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src="https://sik-portfolio.s3.ap-northeast-2.amazonaws.com/jmsyaya.png" alt="어바웃" />
                    </div> 
                </div>
                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Intro;