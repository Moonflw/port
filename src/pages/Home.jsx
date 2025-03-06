import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Front-End</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, SaSS,
                Next, Yarn, TailwindCSS, Zustand
              </p>
            </li>
            {/* <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>Prisma, Zustand</p>
            </li> */}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
