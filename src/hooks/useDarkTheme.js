import  { useState, useEffect } from 'react'

const useDarkTheme = () => {

    const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem('DarkTheme') || false))

    useEffect(() => {
        localStorage.setItem('DarkTheme', JSON.stringify(darkTheme))
    }, [darkTheme])

  return [darkTheme, setDarkTheme]
}

export default useDarkTheme
