import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Main = () => (
  <div>
    <h2 className="main-header">안녕하세요. 저는 <strong style={{color:'skyblue', backgroundColor:'gray'}}>강창우</strong>입니다.</h2>
  </div>
);

const Introduce = () => (
  <div>
    <h2 className="sub-header">소개</h2>
    <p>웹프로그래밍 응용 수업 수강중입니다.</p>
  </div>
);

const Phonenum = () => (
  <div>
    <h2 className="sub-header">연락처</h2>
    <p>이메일: chduch6887@naver.com</p>
    <p>전화번호: 010-8232-6637</p>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1 className="title">자기소개 홈페이지</h1>
      <hr style={{margin: 20}}></hr>
      <div className="button-container">
        <button className="button" onClick={() => changePage('main')}>홈</button>
        <button className="button" onClick={() => changePage('introduce')}>소개</button>
        <button className="button" onClick={() => changePage('phonenum')}>연락처</button>
      </div>
      <div className="content">
        {currentPage === 'main' && <Main />}
        {currentPage === 'introduce' && <Introduce />}
        {currentPage === 'phonenum' && <Phonenum />}
      </div>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
