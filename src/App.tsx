import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"
import { Display1 } from "./components/display1/Display1"
import { Display2 } from "./components/display2/Display2"
import { SearchHistory } from "./components/searchHistory/SearchHistory"
import { WordProvider } from "./contexts/historyContext"
  
function App() {

  return (
    <WordProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Display1 />} />
            <Route path="/display2" element={<Display2 />} />
            <Route path="/history" element={<SearchHistory />} />
          </Routes>
        </main>
      </BrowserRouter>
    </WordProvider>
  )
}

export default App
