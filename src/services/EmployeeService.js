import axios from "axios";

const REST_API_BASE_URL ='http://localhost:8080/api/employees/';

 export const listEmployees=()=> axios.get(REST_API_BASE_URL);

 export const createEmployees= (employee)=> axios.post(REST_API_BASE_URL,employee);

 export const getEmployeeById=(employeeId)=> axios.get(REST_API_BASE_URL+employeeId);

 export const updateEmployeeById=(employeeId,employee)=> axios.put(REST_API_BASE_URL+employeeId,employee);

 export const deleteEmployeeById=(employeeId)=> axios.get(REST_API_BASE_URL+employeeId);


export default listEmployees;