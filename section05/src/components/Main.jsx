import "./Main.css";

// JSX주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다 (객체나 나머지 값은 안됨)
// 3. 모든 태그는 닫혀있어야한다
// 4. 최상위 태그는 반드시 하나여야만 한다

const Main = () => {
  const number = 123456789;

  return (
    <main>
      <h1>main</h1>
      <div className="logout">logout</div>
    </main>
  );
};

export default Main;
