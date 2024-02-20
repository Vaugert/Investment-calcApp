import InputForm from "./assets/components/InputForm";
import "./util/investment";
import { calculateInvestmentResults } from "./util/investment";
import Header from "./assets/components/Header";
import Results from "./assets/components/Results";
import { useState } from "react";
import { formatter } from "./util/investment";
function App() {
  const [investmentData, setInvestmentData] = useState(null);
  const [initialInvestment, setInitialInvestment] = useState(null);
  const [annualInvestment, setAnnualInvestment] = useState(null);

  const handleCalculate = (data) => {
    const results = calculateInvestmentResults(data);

    setInvestmentData(results);
    setInitialInvestment(data.initialInvestment);
    setAnnualInvestment(data.annualInvestment);
  };
  return (
    <div>
      <Header />
      <InputForm onCalculate={handleCalculate} currencyFormatter={formatter} />
      {investmentData && (
        <Results
          investmentResults={investmentData}
          currencyFormatter={formatter}
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
        />
      )}
    </div>
  );
}

export default App;
