import BarChart from "components/BarChart/index";
import DataTable from "components/DataTable/index";
import DonutChart from "components/DonutChart/index";
import Footer from "components/Footer/index";
import NavBar from "components/NavBar/index";

function Dashboard() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary py-3">Olá Devs Spring with React!</h1>
      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secundary">Taxa de Sucesso (%)</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secundary">Total de Vendas</h5>
          <DonutChart />
        </div>
      </div>
      <h1 className="text-primary py-3">Todas as vendas:</h1>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default Dashboard;