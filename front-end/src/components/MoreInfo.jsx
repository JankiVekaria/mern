import React from 'react'

export default function MoreInfo() {
  return (
    <div className="moreInfo">
      <div className="moreInfo__container">
        <div className="moreInfo__left">
          <i className="fas fa-home"></i>
          <h2 className="moreInfo__left--header">List a property</h2>
          <p className="moreInfo__left--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className="moreInfo__right">
          <i className="fas fa-building"></i>
          <h2 className="moreInfo__right--header">Rent a house</h2>
          <p className="moreInfo__right--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  )
}
