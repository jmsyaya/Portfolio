import React from 'react'

const Main = ({ children }) => {
  return (
    <main id="main" role="main">
        {children}
    </main>
  )
}

export default Main 
// Main 컴포넌트는 자식 컴포넌트들을 렌더링하는 래퍼(wrapper) 역할,  children prop을 받아와서 해당 자식 컴포넌트들을 <main> 태그로 감싸서 반환