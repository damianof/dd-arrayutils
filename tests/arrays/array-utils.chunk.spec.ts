import { expect } from 'chai'
import ArrayUtils from '../../src'
import { TestItem, testItemHelper } from '../../tests-helpers/test-item-helper'

describe('ArrayUtils', () => {

  describe('chunk', () => {
    it('should return empty array when original array is empty', () => {
      const items: TestItem[] = []
      const chunks = ArrayUtils.chunk(items, 3)
      expect(chunks.length).to.equal(0)
    })

    it('should return empty array when original array is undefined', () => {
      const items: any[] = undefined as any
      const chunks = ArrayUtils.chunk(items as any, 3)

      expect(chunks.length).to.equal(0)
    })

    it('should chunk array with one item in an array of one', () => {
      const items: TestItem[] = [
        {
          id: '',
          position: 1,
          selected: false,
          name: 'X',
        },
      ]
      const chunks = ArrayUtils.chunk(items, 3)

      expect(chunks.length).to.equal(1)
      expect(chunks[0].length).to.equal(1)
    })

    it('should chunk array of items with a reminder of one', () => {
      const items: TestItem[] = testItemHelper.createMockedItems(7)
      const chunks = ArrayUtils.chunk(items, 3)

      expect(chunks.length).to.equal(3)
      expect(chunks[0].length).to.equal(3)
      expect(chunks[1].length).to.equal(3)
      expect(chunks[2].length).to.equal(1)
    })

    it('should chunk array of items with a reminder of two', () => {
      const items: TestItem[] = testItemHelper.createMockedItems(8)
      const chunks = ArrayUtils.chunk(items, 3)

      expect(chunks.length).to.equal(3)
      expect(chunks[0].length).to.equal(3)
      expect(chunks[1].length).to.equal(3)
      expect(chunks[2].length).to.equal(2)
    })

    it('should chunk array of items evenly', () => {
      const items: TestItem[] = testItemHelper.createMockedItems(9)
      const chunks = ArrayUtils.chunk(items, 3)

      expect(chunks.length).to.equal(3)
      expect(chunks[0].length).to.equal(3)
      expect(chunks[1].length).to.equal(3)
      expect(chunks[2].length).to.equal(3)
    })
  })
})
