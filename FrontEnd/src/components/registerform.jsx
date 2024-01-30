import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import {register} from './services/userservice';
import {withRouter} from './common/hooks';
import {getService} from './services/servicesservice';
import { uniqueOrder } from './services/orderservice';

class RegisterForm extends Form {
    state = { 
        data:{
            fullname:"",
            email:"",
            password:"",
            service:"",
            phone:"",
            address:"",
            city:"",
            state:"",
            pincode:null,
            cart:[],
        },
        services:[],
        errors:{}
     };
    Schema = {
        _id:Joi.string(),
        fullname: Joi.string().min(3).max(25).required().label('fullname'),
        email: Joi.string().min(5).required().label('email'),
        password: Joi.string().min(8).max(20).required().label('password'),
        service:Joi.string().required().label('service'),
        phone:Joi.string().min(10).max(11).required().label('phone number'),
        address:Joi.string().min(5).max(1000).required().label('address'),
        city:Joi.string().min(5).max(30).required().label('city'),
        state:Joi.string().min(5).max(30).required().label('state'),
        pincode:Joi.number().min(100000).max(999999).required().label('pincode'),
        isAdmin:Joi.boolean().default(false),
        cart:Joi.array(),
        order:Joi.string()       
    };
    doSubmit = async ()=>{
        try{
            const {data:orderid} = await uniqueOrder();
            const {data} = await register(this.state.data,orderid);
            window.location = '/products';
            console.log(data);
        }
        catch(ex){
            if(ex.response && ex.response.status === 400){
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({errors});
            }
        }
        console.log('new user registered!');
    }
    async componentDidMount() {
        const {data: services}= await getService();
        this.setState({services});
    }
    render() { 
        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("fullname","Fullname")}
                    {this.renderInput("email","Email")}
                    {this.renderInput("password","Password")}
                    {this.renderSelect("service","Services",this.state.services)}
                    {this.renderInput("phone","Phone")}
                    {this.renderInput("address","Address")}
                    {this.renderInput("city","City")}
                    {this.renderInput("state","State")}
                    {this.renderInput("pincode","Pincode")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}
 
export default withRouter(RegisterForm);