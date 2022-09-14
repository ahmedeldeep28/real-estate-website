import React from 'react'

function BannerPage({title,desc}) {
  return (
    <div className="banner box-center">
      <div className="text-center">
        <h1 className="text-white text-capitalize">{title}</h1>
        <p className="lead text-light">{desc}</p>
      </div>
    </div>
  )
}

export default BannerPage