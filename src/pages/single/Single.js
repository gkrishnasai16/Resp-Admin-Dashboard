import "./single.scss";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/TableList";
import { userRows } from "../../data/datatablesource";
import { useParams } from "react-router-dom";

const Single = () => {
  const { userId } = useParams();
  console.log(useParams());
  console.log(userRows);

  const renderProfileCard = () => {
    return (
      <div className="left">
        <div className="editButton">Edit</div>
        <h1 className="title">Information: {userId}</h1>
        {userRows
          .filter((list) => list.username === userId)
          .map((list) => (
            <div className="item" key={list.id}>
              <img src={list.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">
                  {list.name} {list.surName}
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{list.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{list.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">{list.adress}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{list.country}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  };
  return (
    <>
      <div className="top">
        {renderProfileCard()}
        <div className="right" style={{ width: "100%", height: "100%" }}>
          <Chart height="85%" title="User Spending ( Last 6 months )" />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <TableList />
      </div>
    </>
  );
};
export default Single;
