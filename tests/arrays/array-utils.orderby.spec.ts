import { expect } from 'chai'
import { ArrayUtils } from '../../src/arrays/ArrayUtils'
import { TestItem, testItemHelper } from '../../tests-helpers/test-item-helper'

describe('ArrayUtils', () => {
  const arrayUtils = new ArrayUtils()

  describe('orderBy', () => {
    it('should sort item array correctly by name when two items have the same name', () => {
      const items: TestItem[] = [
        {
		  id: '',
          position: 1,
          selected: false,
          name: 'A Item',
        },
        {
          id: '',
          position: 2,
          selected: false,
          name: 'A Item',
        },
      ]
      arrayUtils.orderBy(items, 'name')

      expect(items[0].position).to.equal(1)
      expect(items[1].position).to.equal(2)
    })

    it('should sort items with different names correctly by name', () => {
      const items: TestItem[] = testItemHelper.createMockedItems(3)
      arrayUtils.orderBy(items, 'name')

      expect(items[0].position).to.equal(1)
      expect(items[1].position).to.equal(2)
      expect(items[2].position).to.equal(3)
    })

    it('should sort items correctly by position', () => {
      const items: TestItem[] = testItemHelper.createMockedItems(3)
      arrayUtils.orderBy(items, 'position')

      expect(items[0].position).to.equal(1)
      expect(items[1].position).to.equal(2)
      expect(items[2].position).to.equal(3)
    })
  })
})
