import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Login } from "./screens/Login";
import { UserList } from "./screens/UserList";
import { CollegeList } from "./screens/CollegeList";
import { CollegeCreate } from "./screens/CollegeCreate";
import { UserCreate } from "./screens/UserCreate";


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/user-list" element={<UserList />}/>
        <Route path="/college-list" element={<CollegeList />}/>
        <Route path="/college-create" element={<CollegeCreate />}/>
        <Route path="/user-create" element={<UserCreate />}/>
      </Routes>
    </BrowserRouter>
  );
}