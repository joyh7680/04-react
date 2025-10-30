import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>로 라우팅 기능을 감쌈 */}
    {/* <BrowserRouter>  */}
      <App />   {/* <- App.jsx 연결 */}
    {/* </BrowserRouter> */}
  </StrictMode>,
)
