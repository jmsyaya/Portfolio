import React, { useState } from "react";  

const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    },
]

const Header = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">Jeong MyeongSik<em>portfolio</em></a>
                </div>
                    <nav className={`header__nav ${show ? "show" : ""}`}
                    role="navigation"
                    aria-label="메인 메뉴"
                    >  
                    <ul>
                        {headerNav.map((nav,key) => (
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                        ))}
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"}
                    role="button" 
                    tabIndex="0"
                    onClick={toggleMenu}
                >   
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
// react는 href에 #이 아닌 /를 씀. class 대신 className을 씀.
// <header> : role="heading" 속성을 설정.
// <nav> : role="navigation" 속성을 추가하고, aria-label 속성을 통해 메인 메뉴를 설명하는 텍스트를 제공.
// <div class="header__nav__mobile"> : role="button"과 tabindex="0" 속성을 추가하여 해당 요소가 버튼 역할을 하고 키보드 포커스를 받을 수 있도록 함.
// {`header__nav ${show ? "show" : ""}`}: 삼항연산자 






