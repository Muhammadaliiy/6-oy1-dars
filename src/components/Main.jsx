import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <div className="main-container container">
        <div className="section1">
          <h1 className="title">Learn Any Foreign Language</h1>
          <p className="text-content">
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <button className="getBtn">
            <a className="getBtnTitile" href="#">
              Get started
            </a>
          </button>
        </div>
        <img className="light-img" src="src/assets/lighting.svg" alt="" />
        <img className="main-img" src="src/assets/hero-bg.svg" alt="" />
      </div>
    </main>
  );
}
