import React, { useEffect,useState } from 'react'
import { createEmployees, getEmployeeById, updateEmployeeById } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator=useNavigate();
    const {id}=useParams();

    useEffect(()=>
    {
          if(id)
          {
                getEmployeeById(id).then((response)=>
                {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.email);
                }).catch((error)=>
                {
                    console.error(error)
                })
          }
    },[id]);

    const [errors,setErrors]=useState({
         firstName: '',
         lastName: '',
         email: ''
    });

    

    function pageTitle()
    {
        if(id)
        {
           return  <h1 className='text-center'>Update Employee</h1>
        }
        else{
           
           return <h1 className='text-center'>Add Employee</h1>
        }
    }

    function validateForm()
    {
        let valid=true;

        const errorsCopy = {...errors};
        if(firstName.trim())
        {
            errorsCopy.firstName='';
        }
        else
        {
            errorsCopy.firstName='Last name is required';
            valid=false;
        }

        if(lastName.trim())
        {
            errorsCopy.lastName='';
        }
        else
        {
            errorsCopy.lastName='Last name is required';
            valid=false;
        }

        if(email.trim())
        {
            errorsCopy.email='';
        }
        else
        {
            errorsCopy.email='Email is required';
            valid=false;
        }
        setErrors(errorsCopy);

        return valid;
    }


    function saveOrUpdateEmployee(e) 
    {
        e.preventDefault();

       

        if(validateForm())
        {
            const employee = {firstName,lastName,email};
            console.log(employee);

            // For Update employee
            if(id)
            {
                 updateEmployeeById(id,employee).then((response)=>
                 {
                    alert("---------");
                    console.log("response--"+response.data);
                    navigator(`/employees`)
                 }).catch(error=>
                    {
                        console.error(error);
                    })
            }
            else  // For add Employee
            {
                alert("---------hhhh");
                createEmployees(employee).then((response)=>
                {
                    console.log(response.data);
                    navigator('/employees');
        
                }).catch((error)=>
                {
                    console.error(error);
                })
            }
    
           
        }
        
    }


    return (
        <div >
            <div className='row '>
                <div className='card col-md-6 offset-md-3 mt-2'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div>
                                <div className="form-group mb-2">
                                    <label className='form-label'>Employee First name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Employee first name'
                                        name='firstName'
                                        value={firstName}
                                        className={`form-control ${errors.firstName ? 'is-invalid':''}`}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                                </div>
                                <div className="form-group mb-2">
                                    <label className='form-label'>Employee Last name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Employee last name'
                                        name='lastName'
                                        value={lastName}
                                        className={`form-control ${errors.lastName ? 'is-invalid':''}`}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                   {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'>Employee Email</label>
                                    <input
                                        type='email'
                                        placeholder='Enter Employee Email'
                                        name='email'
                                        value={email}
                                        className={`form-control ${errors.email ? 'is-invalid':''}`}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                </div>
                                <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Add Employee</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default EmployeeComponent