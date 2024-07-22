// FeatureItem component

import React from "react";
import '../styles/FeatureItem.css'

function FeatureItem ({image, description, imageAlt, title}) {
    return (
        <div className="feature-item">
        <img src={image} alt={imageAlt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    )
}

export default FeatureItem