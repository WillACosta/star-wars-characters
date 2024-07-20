import { capitalizeFirstLetter } from './capitalize'

describe('CapitalizeFirstLetter Tests', () => {
  test('should return empty string if word is empty', () => {
    const actual = capitalizeFirstLetter('')
    expect(actual).toBe('')
  })

  test('should capitalize the first letter of the word', () => {
    const actual = capitalizeFirstLetter('mandalorian')
    expect(actual).toBe('Mandalorian')
  })
})
