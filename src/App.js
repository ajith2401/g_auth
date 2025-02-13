
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm.jsx';
import Home from './components/Home.jsx';
import AuthProvider from './components/AuthContex.js';
import ThemeProvider from './components/ThemeProvider.jsx';
import ThemeSwitch from './components/ThemeSwitch.jsx';

function App() {

  return (
    <div className='App min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white'>
    <ThemeProvider>
    <AuthProvider>
    <BrowserRouter>
    <ThemeSwitch/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
