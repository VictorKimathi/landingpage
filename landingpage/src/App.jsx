import react from "react";
import Header from "./sections/Header";
import Section from "./sections/Section";
import Feature from "./sections/Feature.jsx";
import Pricing from "./sections/Pricing.jsx";

function App() {
  return (
    <main className="overflow-hidden">
      {/*overflow hidden ensures we do not see unneccessary scrollbars */}
      <Header />
      <Section />
      <Feature />
      <Pricing />
    </main>
  );
}

export default App;
