import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Navbar from "components/NavBar";

function Dashboard() {
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
            <footer />
        </>
    );
}

export default Dashboard;