import React from "react";

const EggEffect = ({ imageUrl, hoverText }) => {
  return (
    <div className={"eggEffectContainer"}>
      <div className={"eggEffectImageWrapper"}>
        <div
          className={`eggEffectImageHalf eggEffectTopHalf`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div
          className={`eggEffectImageHalf eggEffectBottomHalf`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="eggEffectHoverText text-white text-sm">{hoverText}</div>
    </div>
  );
};

export default EggEffect;
