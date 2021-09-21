import React from "react";

const Star = ({ starRate }) => {
  return (
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="option1"
      />
      <label class="form-check-label" for="inlineRadio1">
        {starRate}
      </label>
    </div>
  );
};

export default Star;
