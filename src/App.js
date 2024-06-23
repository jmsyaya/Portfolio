import React, { useEffect } from 'react';
import {BrowserRouter, Route, Routes} from'react-router-dom';

import HomeView from "./views/HomeView";

import lenis from './utils/lenis';
import link from './utils/link';

const App = () => {
    useEffect(() => {
        lenis();
        link();
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;

//BrowserRouter 라우팅을 적용하기위한 컴포넌트
//Routes 라우트들을 정의하는 컨테이너