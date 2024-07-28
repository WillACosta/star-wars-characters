import { extractIdFromSWApiResourceUrl } from "./extract-id-sw-resource"

describe('extractIdFromSWApiResourceUrl Tests', () => {
  test('should return id from given url string', () => {
    const actual = extractIdFromSWApiResourceUrl(
      'https://swapi.dev/api/people/1/',
      'people'
    )

    expect(actual).toBe('1')
  })
})
