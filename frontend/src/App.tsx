import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import Navbar from "components/NavBar";

function App() {
  return (
    //<> -> "Fragment" utilizado para englobar a estrutura
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <BarChart />
          </div>
          <div className="col-sm-6">
            <DonutChart />
          </div>
        </div>
        <h2 className="text-primary py-3">Total de Vendas</h2>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
