import react from "react"
import Header from "./sections/Header"

function App() {


  return (
    <main className="overflow-hidden">
        {/*overflow hidden ensures we do not see unneccessary scrollbars */}
        <Header />
    </main>
  )
}

export default App
