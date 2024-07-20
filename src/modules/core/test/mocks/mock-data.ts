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
      residents: [
        'https://swapi.dev/api/people/1',
        'https://swapi.dev/api/people/2',
      ],
    },
  ]
}
