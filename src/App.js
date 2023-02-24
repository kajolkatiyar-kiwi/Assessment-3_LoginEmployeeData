import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from './components/LoginPage'
import UserList from './components/UserList'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItem from './components/AddItem'
// import ReadData from './components/ReadData'
// import Update from './components/Update';


function App() {
  return (
    <div className="App">
 
      

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/userList' element={<UserList/>}></Route>
          <Route exact path='/addItem' element={<AddItem/>}></Route>
        </Routes>
      </BrowserRouter> 
      </div>
   
  );
}

export default App;