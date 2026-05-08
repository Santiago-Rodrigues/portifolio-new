import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PresentationPage from './pages/PresentationPage.jsx'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={HomePage} path='/' />
                <Route Component={PresentationPage} path='/presentationPage'/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes