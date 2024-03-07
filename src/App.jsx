import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ErrorConnecting from './pages/ErrorConnecting'
import SelectWallet from './pages/SelectWallet'
import WalletError from './pages/wallet-error'

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/select-wallet' element={<SelectWallet />}></Route>
        <Route path='/wallet-error' element={<WalletError />}></Route>
        <Route path='*' element={<ErrorConnecting />}></Route>
      </Routes>
    </>
  )
}

export default App