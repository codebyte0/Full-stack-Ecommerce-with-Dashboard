import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Customers from './pages/Customers'
import Products from './pages/Products'
import Transactions from './pages/Transactions'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'
import "./styles/app.scss"
import 'simplebar/dist/simplebar.min.css';
import 'simplebar';
import "./index.css"
import { ThemeProvider } from "@/components/theme-provider"

const Dashboard = lazy(() => import('./pages/Dashboard'))
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/transactions" element={<Transactions />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App

