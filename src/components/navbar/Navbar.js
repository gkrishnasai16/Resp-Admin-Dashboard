import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UserNav from "./UserNav";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Kékessé ...?" />
          <SearchOutlinedIcon />
        </div>
        <UserNav />
      </div>
    </div>
  );
};
export default Navbar;
