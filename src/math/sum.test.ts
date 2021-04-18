import { sum } from './sum'

describe('sum function', () => {
  it('adds two summand arguments', () => {
    expect(sum(2, 2)).toBe(4)
  })
})
