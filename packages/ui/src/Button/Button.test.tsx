import { render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import Button from './Button'

test('Button', () => {
  render(<Button title="123123" />)

  expect(screen.getByRole('button')).toHaveTextContent('123123')
})
