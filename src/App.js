import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/list/UserList";
import ProductList from "./pages/list/ProductList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Layout from "./Layout";
import NoMatch from "./NoMatch";

import { userRows } from "./data/datatablesource";

import { Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./data/formSource";

const App = () => {
  const data = userRows;
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<UserList data={data} />} />
            <Route path=":userId" element={<Single data={data} />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
export default App;
