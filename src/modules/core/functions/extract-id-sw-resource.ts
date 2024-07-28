export function extractIdFromSWApiResourceUrl(
  url: string,
  resource: 'people' | 'planets'
) {
  return url.split(`https://swapi.dev/api/${resource}/`)[1].replace('/', '')
}
