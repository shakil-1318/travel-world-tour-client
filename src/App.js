import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import AddNewService from './Pages/AddNewService/AddNewService';
import Booking from './Pages/Home/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import Notfound from './Pages/Notfound/Notfound';
import Header from './Pages/Shared/Header/Header';

function App() {
  // hello
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/myorder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/manageOrder'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path='/addnewservice'>
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute exact path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
