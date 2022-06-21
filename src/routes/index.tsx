import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "../pages/Dashboard";
import Repository from '../pages/Repository'

const MyRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/repository" element={<Repository />} />
        </Routes>
    </BrowserRouter>
);

export default MyRoutes;
