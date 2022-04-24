import React from "react";
import Navbar from "./commonComponent/Navbar";
import SideBar from "./commonComponent/SideBar";
import PostList from "./postlistComponent/PostList";
import Profile from "./profileComponent/profile";
import { Route, Routes } from "react-router-dom";
import "../style/App.css";
import Login from "./logComponent/login";
import Noti from "../components/notiComponent/Noti";

export const NotiContext = React.createContext();

const App = () => {
    const [openNoti, setOpenNoti] = React.useState(false);
    return (
        <NotiContext.Provider value={[openNoti, setOpenNoti]}>
            <Noti />
            <div className="routes-container">
                <Routes>
                    <Route path="/profile" exact element={<Profile />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route
                        path="/"
                        exact
                        element={
                            <>
                                <Navbar id="navbar_" />
                                <div
                                    className="container"
                                    id="body"
                                    style={{ overflow: "hidden" }}
                                >
                                    <PostList />
                                    <SideBar />
                                </div>
                            </>
                        }
                    />
                </Routes>
            </div>
        </NotiContext.Provider>
    );
};

export default App;
