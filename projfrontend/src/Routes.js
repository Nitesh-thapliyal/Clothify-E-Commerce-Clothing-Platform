import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './core/Home'
import Signin from './user/Signin';
import Signup from './user/Signup';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import UserDashboard from './user/UserDashBoard'
import AdminDashboard from './user/AdminDashBoard'
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/ManageCategories';
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCategories from './admin/UpdateCategories'

const Router = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/'  exact component={Home}/>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/signin' exact component={Signin}/>
        <PrivateRoute path='/user/dashboard' exact component={UserDashboard}/>
        
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard}/>
        <AdminRoute path='/admin/create/category' exact component={AddCategory}/>
        <AdminRoute path='/admin/categories' exact component={ManageCategories}/>
        <AdminRoute path='/admin/category/update/:categoryId' exact component={UpdateCategories}/>
        <AdminRoute path='/admin/products' exact component={ManageProducts}/>
        <AdminRoute path='/admin/create/product' exact component={AddProduct}/>
        <AdminRoute path='/admin/product/update/:productId' exact component={UpdateProduct}/>
      </Switch>    
    </BrowserRouter>
  );
}

export default Router;