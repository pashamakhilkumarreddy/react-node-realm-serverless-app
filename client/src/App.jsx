import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Routes from "./routes";

const App = () => {
  return [
    <Header key="header" />,
    <main className="container mt-3" key="main">
      <Routes/>
    </main>,
    <Footer key="footer" />,
  ];
};

export default App;
