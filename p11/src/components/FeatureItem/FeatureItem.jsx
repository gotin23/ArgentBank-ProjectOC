import React from "react";
import "./FeatureItem.css";

export default function FeatureItem({ state }) {
  return (
    <div className="feature-item">
      <img src={state.logo} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{state.title}</h3>
      <p>{state.description}</p>
    </div>
  );
}
