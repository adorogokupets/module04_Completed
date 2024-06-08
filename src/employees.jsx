import EmployeeAdd from "./EmployeeAdd.jsx"
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import React from 'react'
import EmployeeList from './EmployeeList.jsx'

const root = createRoot(document.getElementById('content'))
root.render(
    <React.StrictMode>
        <EmployeeList/>
    </React.StrictMode>
)