import React from "react";

const Results = ({
  investmentResults,
  currencyFormatter,
  initialInvestment,
  annualInvestment,
}) => {
  const totalInvestment =
    initialInvestment + annualInvestment * investmentResults.length;

  let investmentValueAfterYears = 0;
  if (investmentResults.length > 0) {
    // Calculate the investment value after the given number of years
    const lastResult = investmentResults[investmentResults.length - 1];
    investmentValueAfterYears = lastResult.valueEndOfYear;
  }

  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest Earned</th>
            <th>Investment Value</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {investmentResults.map((result, index) => (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{currencyFormatter.format(result.interest)}</td>
              <td>{currencyFormatter.format(result.valueEndOfYear)}</td>
              <td>{currencyFormatter.format(result.annualInvestment)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">
              <strong>
                Total Investment After {investmentResults.length} Years:
              </strong>{" "}
              {currencyFormatter.format(totalInvestment)}
            </td>
          </tr>
          <tr>
            <td colSpan="4" id="end-results">
              <strong>
                Investment Value After {investmentResults.length} Years:
              </strong>{" "}
              {currencyFormatter.format(investmentValueAfterYears)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;
