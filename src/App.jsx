import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <AppHeader />
      <main className="main">
        <Home />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
