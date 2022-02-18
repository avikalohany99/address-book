import React,  { Component } from 'react';
import axios from 'axios';

export default class CreateAddress extends Component {

    constructor(props) {
        super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: 0,
            users: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/users/")
        .then(response => { 
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                })
            }
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhonenumber(e) {
        this.setState({
            phonenumber: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const address ={
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phonenumber: this.state.phonenumber
        }
        console.log(address);

        axios.post('http://localhost:5000/address/add', address)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return(
            <div>
            <h3>Create New Address</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <select ref="userInput"
                    requiredclassname="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                        this.state.users.map(function(user) {
                            return<option
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                    }
                    </select>
                </div>
                <div className="form-group">
                    <label>First Name: </label>
                    <input type="text"
                    required
                    className = "form-control"
                    value = {this.state.firstname}
                    onChange={this.onChangeFirstname}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text"
                    required
                    className = "form-control"
                    value = {this.state.lastname}
                    onChange={this.onChangeLastname}
                    />
                </div>
                <div className="form-group">
                    <label>Email ID: </label>
                    <input type="text"
                    required
                    className = "form-control"
                    value = {this.state.email}
                    onChange={this.onChangeEmail}
                    />
                </div>
                <div className="form-group">
                    <label>Phone number: </label>
                    <input type="text"
                    required
                    className = "form-control"
                    value = {this.state.phonenumber}
                    onChange={this.onChangePhonenumber}
                    />
                </div>
               
                <div className="form-group">
                    <input type="submit" value="Create Address" className="btn btn-primary" />
                </div>
            </form>
            </div>
            
        )
    }
}