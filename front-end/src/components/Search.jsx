import React, { Component } from 'react'

export default class Search extends Component {

  state = {
    showAdvanced: false
  }

  advanceSearch = () => {
    this.setState({
      showAdvanced: !this.state.showAdvanced
    })
  }

  render() {
    return (
      <div className="search">
        <form className="search__form">
          <input type="text" className="search__location" placeholder="Enter location, city, postal code" name="location" required />
          <button type="submit" className="search__submit">Search</button>


          <p>Advanced search<i className={this.state.showAdvanced ? "fas fa-minus" : "fas fa-plus"} style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={this.advanceSearch}></i></p>

          {this.state.showAdvanced ?
            <div className="search__advanced">
              <label htmlFor="min-price">Min price:</label>
              <input type="number" className="search__minPrice" placeholder="min" name="min" />

              <label htmlFor="max-price">Max price:</label>
              <input type="number" className="search__maxPrice" placeholder="max" name="max" />

              <label htmlFor="">Number of bedrooms:</label>
              <select name="bedroom" className="search__bedrooms">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div> : null}
        </form>
      </div>
    )
  }
}
