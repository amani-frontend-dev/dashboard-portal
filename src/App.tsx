import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import DashboardFrame from './components/DashboardFrame'
import { TAB_CONFIG } from './config'

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-950">
      <NavBar />
      <main className="flex-1 overflow-hidden">
        <Routes>
          {TAB_CONFIG.map((tab) => (
            <Route
              key={tab.path}
              path={tab.path}
              element={<DashboardFrame src={tab.src} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/signal" replace />} />
        </Routes>
      </main>
    </div>
  )
}
