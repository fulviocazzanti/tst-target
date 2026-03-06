import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide } from '../src/math.js'

describe('math', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
  it('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2)
  })

  it('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5)
  })

  it('throws an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero')
  })
})
