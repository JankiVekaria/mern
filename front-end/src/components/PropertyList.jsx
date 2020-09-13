import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class PropertyList extends Component {

  state = {
    properties: [],
    currentPage: 1,
    propertyPerPage: 8
  }

  componentDidMount() {
    axios.get('http://localhost:8080/properties')
      .then(data => {
        // const result = data.data.module;
        // console.log(result);

        this.setState({
          properties: data.data
        })
      })
  }
  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { properties, currentPage, propertyPerPage } = this.state;
    const indexOfLastProperty = currentPage * propertyPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertyPerPage;
    const currentProperty = properties.slice(indexOfFirstProperty, indexOfLastProperty);

    // return (
    //   <div className="propertyList">
    //     <div className="propertyList__container">
    //       <h1 className="propertyList__header">Looking for a rental property?</h1>
    //       <p className="propertyList__text">20 most recent apartments and houses</p>

    //       <div className="propertyList__items">
    //         {properties.map(item =>
    //           <Link to={`/properties/${item._id}`} style={{ textDecoration: 'none', color: '#000' }}>
    //             <div className="propertyList__items--item" key={item.index}>
    //               <img src={item.picture} alt="" className="propertyList__items--img" />
    //               <p><b>Address: </b>{item.address}</p>
    //               <p><b>City: </b>{item.city}</p>
    //               <p className="propertyList__items--price"><b>Price: </b>${item.price}</p>
    //             </div>
    //           </Link>
    //         )}
    //       </div>

    //     </div>
    //   </div>
    // )

    const renderProperty = currentProperty.map(item =>
      <Link to={`/properties/${item._id}`} style={{ textDecoration: 'none', color: '#000' }} key={item.index}>
        <div className="propertyList__items--item" >
          <img src={item.picture} alt="" className="propertyList__items--img" />
          <p><b>Address: </b>{item.address}</p>
          <p><b>City: </b>{item.city}</p>
          <p className="propertyList__items--price"><b>Price: </b>${item.price}</p>
        </div>
      </Link>
    )

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(properties.length / propertyPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="propertyList__items--number"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="propertyList">
        <div className="propertyList__container">
          <h1 className="propertyList__header">Looking for a rental property?</h1>
          <h2 className="propertyList__text">20 most affordable apartments and houses</h2>

          <div className="propertyList__items">
            {renderProperty}

          </div>

        </div>


        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>


      </div>
    )
  }
}
