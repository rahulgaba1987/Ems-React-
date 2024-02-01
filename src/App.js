
import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <HeaderComponent />
        <Routes>

          <Route path='/' element={<ListEmployeeComponent />}/>,
          <Route path='/employees' element={<ListEmployeeComponent />}/>
          <Route path='/add-employee' element={<EmployeeComponent />}/>
          <Route path='/edit-employee/:id' element={<EmployeeComponent />}/>
               
        
          
        </Routes>

        <FooterComponent />
      </BrowserRouter>

    </div>
  );
}

export default App;
