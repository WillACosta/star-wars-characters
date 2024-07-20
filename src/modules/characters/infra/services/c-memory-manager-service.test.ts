import { MockData } from '@/modules/core/test/mocks'
import { MemoryManagerService } from '../../data/services'
import { CMemoryManagerService } from './c-memory-manager-service'

describe('MemoryManagerService Tests', () => {
  let memoryManagerService: MemoryManagerService

  beforeEach(() => {
    memoryManagerService = new CMemoryManagerService()
  })

  test('should set and get data normally', () => {
    memoryManagerService.setData({ characters: MockData.characters })

    expect(memoryManagerService.getData()).toEqual({
      characters: MockData.characters,
    })
  })
})
