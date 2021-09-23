import Layout from "./components/Layout/Layout";
import Header from './components/Layout/Header'
import RandomQuestions from "./components/RandomQuestions";

function App() {
  return (
    <Layout>
      <Header>
        <h1>Spit or Swallow <span>Drinking Game</span></h1>
      </Header>

      <RandomQuestions />
    </Layout>
  );
}

export default App;
