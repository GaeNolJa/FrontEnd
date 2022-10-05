import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./routes/Home"
import MyPage from "./routes/MyPage"
function App() {
  return (<div>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MyPage" element={<MyPage />} />
    </Routes>
  </Router>
  </div>
  );
}

export default App;
