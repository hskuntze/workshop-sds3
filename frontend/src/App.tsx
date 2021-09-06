import DataTable from "components/DataTable";
import Footer from "components/Footer";
import Navbar from "components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
