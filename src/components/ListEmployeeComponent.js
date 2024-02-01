import React, { useEffect, useState } from 'react'
import listEmployees, { deleteEmployeeById } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {

        getAllEmployees();


    }, []);

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(
            (error) => console.error(error));
    }

    function updateEmployee(employeeId) {
        navigator(`/edit-employee/${employeeId}`);
    }

    function addEmployee() {
        navigator(`/add-employee`);
    }

    function removeEmployee(id) {
       
        deleteEmployeeById(id).then((response) => {

            getAllEmployees();

        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <div className='container'>
            <h1 className='text-center'>ListEmployeeComponent</h1>
            <button className='btn btn-primary mb-2' onClick={addEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(emp =>
                            <tr key={emp.employeeId}>
                                <td>{emp.employeeId}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(emp.employeeId)}>Update</button> &nbsp;&nbsp;
                                    <button className='btn btn-danger' onClick={() => removeEmployee(emp.employeeId)}>Delete</button>
                                </td>
                            </tr>

                        )

                    }


                </tbody>
            </table>


        </div>
    )
}

export default ListEmployeeComponent;