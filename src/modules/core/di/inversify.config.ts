import { Container } from 'inversify'

import { CharactersModule } from '@/modules/characters'

const AppDIContainer = new Container({ defaultScope: 'Singleton' })

export function initializeDIModules() {
  AppDIContainer.load(CharactersModule)
}

initializeDIModules()

export function getInstanceOf<T>(name: symbol): T {
  return AppDIContainer.get(name)
}

export { AppDIContainer }
