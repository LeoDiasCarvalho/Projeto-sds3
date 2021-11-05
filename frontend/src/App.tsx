import NavBar from "components/NavBar";
import Footer from "components/footer";
import DateTable from "components/DateTable";

function App() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <h1 className="text-primary">Olá mundo</h1>
      <DateTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
