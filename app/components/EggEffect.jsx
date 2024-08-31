import React from "react";

const EggEffect = ({ imageUrl, hoverText }) => {
  // Function to handle click and navigate to the specified ID
  const handleClick = () => {
    const targetElement = document.getElementById(hoverText);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with ID "${hoverText}" not found.`);
    }
  };

  return (
    <div className="eggEffectContainer" onClick={handleClick}>
      <div className="eggEffectImageWrapper">
        <div
          className="eggEffectImageHalf eggEffectTopHalf"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div
          className="eggEffectImageHalf eggEffectBottomHalf"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="eggEffectHoverText text-white text-sm">{hoverText}</div>
    </div>
  );
};

export default EggEffect;
