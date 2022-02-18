import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Address = props => (
  <tr>
    <td>{props.address.username}</td>
    <td>{props.address.firstname}</td>
    <td>{props.address.lastname}</td>
    <td>{props.address.email}</td>
    <td>{props.address.phonenumber}</td>
    <td>
      <Link to={"/edit/"+props.address.id}>edit</Link> | <a href="#" onClick={() => { props.deleteAddress(props.address._id) }}>delete</a>
    </td>
  </tr>
)

export default class AddressList extends Component {
  constructor(props) {
    super(props);

    this.deleteAddress = this.deleteAddress.bind(this)

    this.state = {address: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/address/')
      .then(response => {
        this.setState({ address: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAddress(id) {
    axios.delete('http://localhost:5000/address/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      address: this.state.address.filter(el => el._id !== id)
    })
  }

  addressList() {
    return this.state.address.map(currentaddress => {
      return <Address address={currentaddress} deleteAddress={this.deleteAddress} key={currentaddress._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Addresses</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.addressList() }
          </tbody>
        </table>
      </div>
    )
  }
}