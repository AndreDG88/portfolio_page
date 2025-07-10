import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import DevDetail from './pages/ProjectDetails/ProjectDetailDev'
import DesignDetail from './pages/ProjectDetails/ProjectDetailDesign'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/dev/:id" element={<DevDetail />} />
      <Route path="/project/design/:id" element={<DesignDetail />} />
    </Routes>
  )
}

export default App

