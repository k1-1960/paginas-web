import './styles/globals.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './partials/Navbar';
import { Sticky } from './components/Sticky';
import { SolidButton } from './components/Button';

import MainPage from './pages/Main';

export function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='mx-5'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}
