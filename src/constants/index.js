import script01 from "../assets/img/javascript01.JPG";
import script02 from "../assets/img/javascript02.JPG";
import script03 from "../assets/img/javascript03.JPG";
import script04 from "../assets/img/javascript04.JPG";
import port05 from "../assets/img/update.png";




export const headerNav = [
    {
        title: "Intro",
        url: "#intro"
    },
    {
        title: "Skill",
        url: "#skill"
    },
    {
        title: "Project",
        url: "#site"
    },
    {
        title: "JavaScript",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    },
];

export const introText = {
    title:["Front-End","정명식"],
    desc: ["talent is", "found at the end of the", "effort"],
};

export const siteText = [
    {
        text: ["","",""],
        title: "",
        code: "https://github.com/jmsyaya/JmsTube",
        view: "https://jms-tube.netlify.app/",
        info: [
            "site coding",
            "production period : 30 days",
            "use stack : React, SCSS",
        ],
    },
    {
        text: [""],
        title: "",
        code: "https://github.com/jmsyaya/Portfolio",
        view: "사이트 배포주소 쓰기",
        info: [
            "site coding",
            "production period : ~ing",
            "use stack : React, SCSS",
        ],
    },
    {
        text: [""],
        title: "",
        code: "https://github.com/jmsyaya/open-market",
        view: "https://mylook-simple.netlify.app/",
        info: [
            "site coding",
            "production period : 14 days",
            "use stack : React, CSS",
        ],
    },
    {
        text: ["추후", "업데이트", "예정"],
        title: "",
        code: "https://github.com/jmsyaya",
        view: "https://github.com/jmsyaya",
        info: [
            "site coding",
            "production period : ?? days",
            "use stack : ",
        ],
    },
];

export const portText = [
    {
        num: "01",
        title: "JMS Drum Kit",
        desc: "순수 100% Vanilla Javascript로 해당되는 키보드의 키를 입력하면 드럼소리가 재생되는 컨텐츠입니다. 각 키마다 다른 드럼소리가 재생이 되며 음악 플레이어 기능을 추가해 잔잔한 노래와 함께 드럼을 연주할 수 있도록 만들었습니다.",
        img: script01,
        code: "https://github.com/jmsyaya/JavascriptDrum",
        view: "https://jmsyaya.github.io/JavascriptDrum/",
        name: "정명식 Drum Kit",
    },
    {
        num: "02",
        title: "JMS Memory Card Game",
        desc: "Javascript를 이용해 같은 그림의 카드를 맞추는 게임 컨텐츠입니다. 게임에서 필요한 주요 기술이 기억력이기 때문에 카드 앞면에 있는 이미지를 아주 잘 기억해야 합니다. 카드 두장을 골라 짝을 맞추면 됩니다. ",
        img: script02,
        code: "https://github.com/jmsyaya/MemoryGame",
        view: "https://jmsyaya.github.io/MemoryGame/",
        name: "정명식 Memory Card Game",
    },
    {
        num: "03",
        title: "JMS Music Player",
        desc: "JavaScript를 사용한 음악 플레이어는 웹 브라우저 내에서 음악 재생 기능을 제공하는 인터랙티브 애플리케이션입니다. 이 플레이어는 HTML, CSS, 그리고 JavaScript를 결합하여 사용자에게 직관적이고 편리한 음악 재생 환경을 제공합니다.",
        img: script03,
        code: "https://github.com/jmsyaya/MusicPlayer",
        view: "https://jmsyaya.github.io/MusicPlayer/",
        name: "정명식 Music Player",
    },
    {
        num: "04",
        title: "JMS Weather App",
        desc: "JavaScript를 사용하여 OpenWeatherMap API로부터 데이터를 가져오고, 이를 사용자에게 시각적으로 표시하는 기능을 제공하는 애플리케이션입니다. 특정 지역 명칭을 영어로 검색하면 그 지역의 날씨 정보를 보여줍니다.",
        img: script04,
        code: "https://github.com/jmsyaya/WeatherApp",
        view: "https://jms-weatherapp.netlify.app/",
        name: "정명식 Weather App",
    },
    {
        num: "05",
        title: "제목",
        desc: "",
        img: port05,
        code: "/",
        view: "",
        name: "",
    },
];

export const contactText = [
    // {
    //     link: "mailto:myeongsikjeong@gmail.com",
    //     title: "Mail : myeongsikjeong@gmail.com",
    // },
];

export const footerText = [
    {
        title: "Kakaotalk",
        desc: "문의사항은 카카오톡으로 보낼 수 있습니다.",
        link: "https://open.kakao.com/me/jmsyaya",
    },
    {
        title: "E-mail",
        desc: "문의사항은 이메일로 보낼 수 있습니다.",
        link: "mailto:myeongsikjeong@gmail.com",
    },
    {
        title: "Instagram",
        desc: "인스타그램에 오시면 저의 일상을 볼 수 있습니다.",
        link: "https://www.instagram.com/s_soezz",
    },
    {
        title: "Github",
        desc: "깃허브에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/jmsyaya",
    },
    {
        title: "Velog",
        desc: "벨로그에 오시면 더 많은 정보를 볼 수 있습니다.",
        link: "https://velog.io/@jmsyaya",
    },
];
