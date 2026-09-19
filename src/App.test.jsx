import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('muestra el nombre de la aplicación', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /cryptopulse/i })).toBeInTheDocument()
  })

  it('muestra el resumen de Bitcoin', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /bitcoin/i })).toBeInTheDocument()
    expect(screen.getByText('BTC')).toBeInTheDocument()
    expect(screen.getByText('$67,250.00')).toBeInTheDocument()
    expect(screen.getByText('+2.34%')).toBeInTheDocument()
  })
})
