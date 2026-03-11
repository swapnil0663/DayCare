import { useState } from 'react'
import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Appointment from './Pages/Appointment/Appointment'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const navigate = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />
      case 'appointment':
        return <Appointment onNavigate={navigate} />
      default:
        return <Landing onNavigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {renderPage()}
    </div>
  )
}

export default App
