import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Routes, Route, Link } from "react-router-dom";
import Watch from "./components/Watch";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
function App() {
  return (
    <Provider store={store}>
      <>
        <Head />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<MainContainer />} />
            <Route path="/watch" element={<Watch />} />
            <Route
              path="/demo"
              element={
                <>
                  <Demo />
                  <Demo2 />
                </>
              }
            />
          </Route>
        </Routes>
        {/* 
        Head
        Body
          Sidebar
            Menu Items
          Main container
            Filter Button Lists
            Video Container
              VideoCard
      */}
      </>
    </Provider>
  );
}

export default App;
