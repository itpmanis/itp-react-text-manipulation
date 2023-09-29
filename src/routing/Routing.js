import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={Home()} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
