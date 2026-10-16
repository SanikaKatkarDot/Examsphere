import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contactus from './pages/Contactus';
import Register from './pages/Register';
import Login from './pages/Login';
import Adminlogin from './pages/Adminlogin';
import AdminRegister from './pages/AdminRegister';
import AdminDashboard from './pages/AdminDashboard';
import AdminStudents from './pages/AdminStudents';
import AdminExams from './pages/AdminExams';
import AdminQuestions from './pages/AdminQuestions';
import AdminResults from './pages/AdminResults';
import AdminMessages from './pages/AdminMessages';
import AdminSettings from './pages/AdminSettings';
import ExploreTests from './pages/ExploreTests';
import OnlineTest from './pages/OnlineTest';
import Appeartest from './pages/Appeartest';
import Result from './pages/Result';
import Addcategory from './pages/Addcategory';
import Addquestions from './pages/Addquestions';
import Preparetest from './pages/Preparetest';
import Contactdetail from './pages/Contactdetail';
import SubjectTests from "./components/SubjectTests";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Navbar />}>
      <Route index element={<Home/>}></Route>
      <Route path='services' element={<Services/>}></Route>
       <Route path='contact' element={<Contactus/>}></Route>
       <Route path='register' element={<Register/>}></Route>
       <Route path='login' element={<Login/>}></Route>
       <Route path='adminlogin' element={<Adminlogin/>}></Route>
       <Route path='adminregister' element={<AdminRegister/>}></Route>
      <Route path='tests' element={<ExploreTests/>}></Route>
      <Route path='tests/:testId' element={<OnlineTest/>}></Route>
      <Route path='appeartest' element={<Appeartest/>}></Route>
      <Route path='result' element={<Result/>}></Route>
      <Route path='addcategory' element={<Addcategory/>}></Route>
      <Route path='addquestions' element={<Addquestions/>}></Route>
      <Route path='preparetest' element={<Preparetest/>}></Route>
      <Route path='contactdetails' element={<Contactdetail/>}></Route>
      </Route>
      
      <Route path='admindashboard' element={<AdminDashboard/>}></Route>
      <Route path='students' element={<AdminStudents/>}></Route>
      <Route path='exams' element={<AdminExams/>}></Route>
      <Route path='questions' element={<AdminQuestions/>}></Route>
      <Route path='results' element={<AdminResults/>}></Route>
      <Route path='messages' element={<AdminMessages/>}></Route>
      <Route path='settings' element={<AdminSettings/>}></Route>
      <Route
  path="/subject-tests/:subject"
  element={<SubjectTests />}
/><Route
  path="/online-test/:testId/:testNumber?"
  element={<OnlineTest />}
/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
