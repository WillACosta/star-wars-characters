import { getAvailablePlanetsUseCase } from './get-available-planets-usecase'

describe('getAvailablePlanetsUseCase ', () => {
  test('should return a list of available planets excluding duplicates', () => {
    const expectedResults = ['Tatooine', 'Alderaan']
    const characters = [
      {
        id: 'dcd8c803-d9d1-464f-86b3-98a734c3a316',
        image: 'https://picsum.photos/400/200',
        name: 'Anakin S.',
        height: '172',
        mass: '77',
        gender: 'MALE',
        homeWorld: 'Tatooine',
      },
      {
        id: 'dcd8c803-d9d1-464f-86b3-98a734c3a316',
        image: 'https://picsum.photos/400/200',
        name: 'Darth Vader',
        height: '172',
        mass: '77',
        gender: 'MALE',
        homeWorld: 'Tatooine',
      },
      {
        id: 'dcd8c803-d9d1-464f-86b3-98a734c3a316',
        image: 'https://picsum.photos/400/200',
        name: 'Leia Organa',
        height: '172',
        mass: '77',
        gender: 'FEMALE',
        homeWorld: 'Alderaan',
      },
    ]

    const actual = getAvailablePlanetsUseCase().execute(characters)
    expect(actual).toEqual(expectedResults)
  })
})
