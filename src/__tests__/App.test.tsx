import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from '../App'
import NavBar from '../components/NavBar'

describe('NavBar', () => {
  it('renders all tabs', () => {
    render(
      <MemoryRouter initialEntries={['/signal']}>
        <NavBar />
      </MemoryRouter>,
    )

    expect(screen.getByText('Signal')).toBeDefined()
    expect(screen.getByText('Predict')).toBeDefined()
    expect(screen.getByText('Trading')).toBeDefined()
    expect(screen.getByText('System')).toBeDefined()
  })

  it('highlights active tab', () => {
    render(
      <MemoryRouter initialEntries={['/predict']}>
        <NavBar />
      </MemoryRouter>,
    )

    const predictBtn = screen.getByText('Predict').closest('button')!
    expect(predictBtn.className).toContain('text-blue-400')

    const signalBtn = screen.getByText('Signal').closest('button')!
    expect(signalBtn.className).toContain('text-gray-400')
  })

  it('switches tab on click', async () => {
    render(
      <MemoryRouter initialEntries={['/signal']}>
        <NavBar />
      </MemoryRouter>,
    )

    const predictBtn = screen.getByText('Predict').closest('button')!
    await userEvent.click(predictBtn)
    expect(predictBtn.className).toContain('text-blue-400')
  })
})

describe('App routing', () => {
  it('defaults to /signal', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    const iframe = document.querySelector('iframe')
    expect(iframe).toBeDefined()
    expect(iframe?.src).toContain('localhost:3080')
  })
})
