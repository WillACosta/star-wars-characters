import { Character } from '@/modules/characters/domain/models'

export abstract class MockData {
  static people = [
    {
      name: 'Anakin S.',
      height: '172',
      mass: '77',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1',
      url: 'https://swapi.dev/api/people/1',
    },
  ]

  static planets = [
    {
      name: 'Tatooine',
      population: '200000',
      residents: [
        'https://swapi.dev/api/people/1',
        'https://swapi.dev/api/people/2',
      ],
    },
  ]

  static characters: Character[] = [
    {
      id: '1',
      image: '/images/characters/1.jpg',
      name: 'Anakin S.',
      height: '172',
      mass: '77',
      gender: 'MALE',
      homeWorld: 'Tatooine',
    },
  ]
}
