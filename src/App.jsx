import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/about-us" Component={AboutUs} />
            <Route path="/posts" Component={Posts} />
            <Route path="/posts/:id" Component={Post} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
