import react from "react";
import Header from "./sections/Header";
import Section from "./sections/Section";

function App() {
  return (
    <main className="overflow-hidden">
      {/*overflow hidden ensures we do not see unneccessary scrollbars */}
      <Header />
      <Section />
    </main>
  );
}

export default App;
