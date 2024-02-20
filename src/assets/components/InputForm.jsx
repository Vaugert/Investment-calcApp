import React from "react";
import { useState } from "react";

const InputForm = ({ onCalculate }) => {
  const initialFormData = {
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericFormData = {
      initialInvestment: parseFloat(formData.initialInvestment),
      annualInvestment: parseFloat(formData.annualInvestment),
      expectedReturn: parseFloat(formData.expectedReturn),
      duration: parseInt(formData.duration),
    };
    onCalculate(numericFormData);
  };

  const handleClear = () => {
    setFormData(initialFormData);
  };
  return (
    <div id="user-input">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span>$</span>
          <label htmlFor="initialInvestment">Initial Investment:</label>
          <input
            type="number"
            id="initialInvestment"
            name="initialInvestment"
            value={formData.initialInvestment}
            onChange={handleChange}
            placeholder="Enter initial investment in $"
            required
          />
        </div>
        <div className="input-group">
          <span>$</span>
          <label htmlFor="annualInvestment">Annual investment:</label>
          <input
            type="number"
            id="annualInvestment"
            name="annualInvestment"
            value={formData.annualInvestment}
            onChange={handleChange}
            placeholder="Enter annual investment in $"
            required
          />
        </div>
        <div className="input-group">
          <span>%</span>
          <label htmlFor="expectedReturn">Expected Return:</label>
          <input
            type="number"
            id="expectedReturn"
            name="expectedReturn"
            value={formData.expectedReturn}
            onChange={handleChange}
            placeholder="Enter return in %"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="duration">Duration(in yrs):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Enter duration in years"
            required
          />
        </div>
        <button type="submit">Calculate</button>
        <button type="button" id="clear" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default InputForm;
