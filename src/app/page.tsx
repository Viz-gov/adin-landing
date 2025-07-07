import Header from "../components/Header/Header";
import Background from "../components/Background/Background";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      <Background />
      <Main />
    </div>
  );
}
