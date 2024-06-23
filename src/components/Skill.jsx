import React from "react";

const skillText =[
    {
        top: "Profile",
        title: '"프론트앤드 개발자를 꿈꾸는 저를 소개합니다."',
        desc: "하고자 하는 일에 있어서는 끊임없이 도전하고 직접 부딪혀보며 경험으로 성장하는 정명식입니다. 저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다. 어려움을 마주할 때도 포기하지 않고 메타인지 방식을 활용 해 문제에 집중하여 해결책을 찾아내는 능력을 갖추려고 노력하고 있습니다. 지속적인 학습과 개인 발전을 통해 능력있는 개발자로 성장하고, 사용자들에게 가치 있는 웹 경험을 제공하는 것이 저의 목표입니다."
    },
    {
        top: "Think About",
        title: "본인이 추구하는 개발은?",
        desc: "직관적인 UI/UX. 항상 역지사지 마인드로 사용자 중심 개발을 추구합니다. 남녀노소 누구나 상관없이 모두가 사용하기 편리하고 쉽게 이용할 수 있도록 개발하고자 하고, 코드의 가독성과 유지보수성을 고려하여 효율적인 프로그램을 작성하는 데에도 신경을 쓰며, 협업 환경에서도 원활한 소통과 협력을 위해 적극적인 자세를 임합니다."
    },
];

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">About Me <em>나의 도전</em></h2>
                <div className="skill__desc">
                <div>
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            {/* <span>{key+1}.</span> */}
                            <span>{skill.top}</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                    </div>
                    <div>
                        <span>Skill & Tools</span>
                        <div className="tools__title">FrontEnd</div>
                        <div className="grid">
                            <div className="img1">
                            <img src="https://github.com/jmsyaya/Portfolio/assets/63501931/dc724bcf-2885-4510-9d9f-0f3b3a2aafe4" className="img2" alt=""></img>
                            </div>
                            <div className="img1">
                            <img src="https://github.com/jmsyaya/Portfolio/assets/63501931/ab0895c0-ed05-40d1-bedc-41c6c889b7d6" className="img2" alt=""></img>
                            </div>
                            <div className="img1">
                            <img src="https://github.com/jmsyaya/Portfolio/assets/63501931/49c0aecd-8169-485e-856d-28d7be414429" className="img2" alt=""></img>
                            </div>
                            <div className="img1">
                            <img src="https://github.com/jmsyaya/Portfolio/assets/63501931/330453c1-6455-46fa-8f90-cf8d689698b7" className="img2" alt=""></img>
                            </div>
                        </div>
                        <div className="tools__title">BackEnd</div>
                        <div className="grid">
                            <div className="img1">
                            <img src="https://github.com/jmsyaya/Portfolio/assets/63501931/cfc34cb8-bab1-47a7-83e4-c88b03fccaee" className="img2" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;