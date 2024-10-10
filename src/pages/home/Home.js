import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Widget from "../../components/widget/Widget";
import TableList from "../../components/table/TableList";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart height="85%" title="Total Ventes" />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <TableList />
      </div>
    </>
  );
};
export default Home;
