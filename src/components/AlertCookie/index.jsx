import { useState, useEffect } from 'react'
import './style.css'

const CookieAlert = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(true)

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookies')
    if (cookiesAccepted !== 'true') setAcceptedCookies(false)
    console.log(!cookiesAccepted === 'true')
  }, [])

  const handleAcceptCookies = () => {
    localStorage.setItem('cookies', true)
    setAcceptedCookies(true)
  }

  return (
    <div>
      {!acceptedCookies && (
        <div className="cookie-alert">
          <div className="content">
            <p>
              Este site usa cookies para análise. Ao continuar, você concorda
              com o uso de cookies.
            </p>
            <button onClick={handleAcceptCookies}>Entendi</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CookieAlert
