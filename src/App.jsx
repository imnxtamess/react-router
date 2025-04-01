import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/About-Us" Component={AboutUs} />
            <Route path="/Posts" Component={Posts} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
