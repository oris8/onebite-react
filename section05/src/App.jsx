import "./App.css";
// vite로 만들었을 때는 확장자 입력안해줘도 됨
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button text={"메일"} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;
