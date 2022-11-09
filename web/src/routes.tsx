import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Login } from "./screens/Login";
import { StudentList } from "./screens/StudentList";
import { CollegeList } from "./screens/CollegeList";
import { CollegeCreate } from "./screens/CollegeCreate";
import { UserCreate } from "./screens/UserCreate";
import { ExpertList } from "./screens/ExpertList";
import { Home } from "./screens/Home";
import { ExpertDetails } from "./screens/ExpertDetails";


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/student-list" element={<StudentList />}/>
        <Route path="/expert-list" element={<ExpertList />}/>
        <Route path="/college-list" element={<CollegeList />}/>
        <Route path="/college-create" element={<CollegeCreate />}/>
        <Route path="/user-create" element={<UserCreate />}/>
        <Route path="/expert-details/:id" element={<ExpertDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}