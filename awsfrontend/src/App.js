import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navb from './Components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import S3Home from './Components/S3/S3Home';
import Ec2Home from './Components/Ec2/Ec2Home';
import Home from './Components/Home/Home';
import CustomList from './Components/List/List';
import CustomForm from './Components/Form/form';
import Ec2List from './Components/List/ec2List';
import S3Card from './Components/Card/s3Card';

function App() {
  
  return (
    <div className="App">
      <Navb></Navb>
      <Routes>
        <Route path = '/' element = { <Home/> } />
        <Route path = '/s3' element = { <S3Home/> } />
        <Route path = '/ec2' element = { <Ec2Home/> } />
        <Route path = '/ec2/list' element = { <Ec2List service = "ec2"/> } />
        <Route path = '/s3/list' element = { <CustomList service="s3" /> } />
        <Route path = '/ec2/create' element = { <CustomForm action = "create" service="ec2" /> } />
        <Route path = '/s3/create' element = { <CustomForm action = "create" service="s3" /> } />
        <Route path = '/ec2/delete' element = { <CustomForm action = "delete" service="ec2" /> } />
        <Route path = '/s3/delete' element = { <CustomForm action = "delete" service="s3" /> } />
      </Routes>
    </div>
  );
}

export default App;
