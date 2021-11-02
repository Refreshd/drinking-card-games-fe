import AppHeader from "./components/AppHeader";
import Layout from "./components/Layout/Layout";
import RandomQuestions from "./components/RandomQuestions";

function App() {
  return (
    <Layout>
      <AppHeader />
      <RandomQuestions />
    </Layout>
  );
}

export default App;
