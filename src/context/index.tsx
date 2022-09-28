import React, {
  Context,
  useContext,
  useState,
  createContext,
  useEffect,
} from 'react'

interface ThemeContext {
  idx: number
  setTheme: React.Dispatch<React.SetStateAction<number>>
}

export const ThemeContext: Context<ThemeContext> = createContext(
  {} as ThemeContext
)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [idx, setTheme] = useState(() => {
    try {
      const item = window.localStorage.getItem('themeIdx')
      return item ? JSON.parse(item) : 1
    } catch (error) {
      return 1
    }
  })

  useEffect(() => {
    localStorage.setItem('themeIdx', JSON.stringify(idx))
  }, [idx])
  return (
    <ThemeContext.Provider value={{ idx, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
