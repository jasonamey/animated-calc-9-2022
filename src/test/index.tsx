import React from 'react'
import { AppProvider } from '../context'

interface ITestWrapperProps {
  children: React.ReactNode
}

export const TestWrapper = ({ children }: ITestWrapperProps) => {
  return <AppProvider>{children}</AppProvider>
}
