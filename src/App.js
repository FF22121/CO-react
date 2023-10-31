import Apply from "./components/Apply";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Switcher from "./components/Switcher";
import AppContextProvider from "./contexts/AppContext";


function App() {
  return (
  <AppContextProvider>
    <Layout>
      <Hero />
      <Switcher />
      <Apply />
    </Layout>
  </AppContextProvider>
  );
}

export default App;
