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

  static characters = [
    {
      id: 'dcd8c803-d9d1-464f-86b3-98a734c3a316',
      image: 'https://picsum.photos/400/200',
      name: 'Anakin S.',
      height: '172',
      mass: '77',
      gender: 'MALE',
      homeWorld: 'Tatooine',
    },
  ]

  static uuid = 'dcd8c803-d9d1-464f-86b3-98a734c3a316'
}
