import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectRoute from "./Components/auth/ProtectRoute";
import { LayoutLoader } from "./Components/layout/LayoutLoader";
import PagenotFound from "./pages/PagenotFound";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Groups"));
const AminLogin = lazy(() => import("./pages/admin/AminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
let user = true;

const App = () => {
  return (
    <Fragment>

      <Router>
        <Suspense fallback={<LayoutLoader/>} >
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/group" element={<Group />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />


<Route path="/admin"  element={<AminLogin/>} />
<Route path="/admin/dashboard" element={<Dashboard/>} />


<Route path="*" element= {<PagenotFound/>} />
        </Routes>
        </Suspense>
      </Router>
      
    </Fragment>
  );
};

export default App;
