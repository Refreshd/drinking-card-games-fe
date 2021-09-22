import Layout from "./components/Layout/Layout";
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Main from "./components/Layout/Main";
import RandomQuestions from "./components/RandomQuestions";

function App() {
  return (
    <Layout>
      <Header>
        <h1>Spit or Swallow <span>Drinking Game</span></h1>
      </Header>

      <Main>
        <RandomQuestions />
      </Main>

      <Footer>
        <a href="https://refreshd.net" title="Refresh'd">Refresh'd</a>
      </Footer>
    </Layout>
  );
}

export default App;
