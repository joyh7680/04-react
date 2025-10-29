import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 7 BrowserRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트 -> import확인*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </StrictMode>,
)
