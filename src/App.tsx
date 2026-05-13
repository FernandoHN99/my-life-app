import { BrowserRouter, Route, Routes } from 'react-router'
import LayoutMain from './pages/layout-main'
import PageHealth from './pages/page-health'
import PageHome from './pages/page-home'

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LayoutMain />}>
               <Route index element={<PageHome />} />
               <Route path="/health" element={<PageHealth />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App
