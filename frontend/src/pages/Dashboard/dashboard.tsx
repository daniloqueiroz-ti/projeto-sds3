import BarChart from "components/barchart";
import DataTable from "components/datatable";
import DonutChart from "components/donutchart";
import Footer from "components/footer";
import NavBar from "components/navbar";

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