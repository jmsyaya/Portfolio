import React from "react";

const skillText =[
    {
        title: "역지사지 마인드로 사용자 중심 개발",
        desc: "기획력과 논리력으로 클라이언트의 의도를 파악하고, 실제 이용하게 될 고객의 경험까지 고려하는 것이 개발자가 갖춰야할 중요한 역량입니다. 직관적이고 Seamless한 UI/UX 구현과 남녀노소 누구나 여러움 없이 쓸 수 있도록 개발하겠습니다."
    },
    {
        title: "끊임없이 노력하는 프론트엔드 개발자",
        desc: "노력과 열정은 결국 좋은 결과를 가져온다고 믿습니다. 끊임없이 배움에 열려있으며, 겸손한 자세로 세부적인 부분까지 꼼꼼하게 살펴보는 개발자가 되겠습니다."
    },
    {
        title: "새로운 시도에 두려워하지 않고 항상 도전",
        desc: "저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다. 어려움을 마주할 때도 포기하지 않고 문제에 집중하여 해결책을 찾아내는 능력을 갖추려고 노력하고 있습니다. 낯선 기술에도 포기 하지 않고 메타인지 방식을 활용해 새로운 기술과 트렌드를 꾸준하게 찾고 인사이트를 얻는 프론트엔드 개발자로 성장하겠습니다. 사용자들에게 가치 있는 웹 경험을 제공하는 것이 저의 목표입니다."
    },
    {
        title: "문제점을 빠르게 파악하고 해결책을 찾아내는 능력",
        desc: "--------------------------------------------------------"
    }
]

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">Challenge <em>나의 도전</em></h2>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key+1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                    </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
};

export default Skill;