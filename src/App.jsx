import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default App;
