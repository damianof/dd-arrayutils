import { expect } from 'chai'
import { arrayUtils } from '@/arrays/array-utils'
import { TestItem, testItemHelper } from '@tests/test-item-helper'

describe('ArrayUtils', () => {

	describe('chunk', () => {

		it('should return empty array when original array is empty', () => {
			
			const items: TestItem[] = []
			const chunks = arrayUtils.chunk(items, 3)
			//console.info('chunk: chunks', chunks)
			expect(chunks.length).to.equal(0)

		})

		it('should return empty array when original array is undefined', () => {
			
			const items: any[] = undefined
			const chunks = arrayUtils.chunk(items as any, 3)
			//console.info('chunk: chunks', chunks)

			expect(chunks.length).to.equal(0)
		})

		it('should chunk array with one item in an array of one', () => {
			
			const items: TestItem[] = [{
					id: 1,
					selected: false,
					name: 'X'
				}]
			const chunks = arrayUtils.chunk(items, 3)
			//console.info('chunk: chunks', chunks)

			expect(chunks.length).to.equal(1)
			expect(chunks[0].length).to.equal(1)

		})

		it('should chunk array of items with a reminder of one', () => {
			
			const items: TestItem[] = testItemHelper.createMockedItems(7)
			//console.info('chunk: items', items)
			const chunks = arrayUtils.chunk(items, 3)
			//console.info('chunk: chunks', chunks)

			expect(chunks.length).to.equal(3)
			expect(chunks[0].length).to.equal(3)
			expect(chunks[1].length).to.equal(3)
			expect(chunks[2].length).to.equal(1)

		})

		it('should chunk array of items with a reminder of two', () => {
			
			const items: TestItem[] = testItemHelper.createMockedItems(8)

			//console.info('chunk: items', items)
			const chunks = arrayUtils.chunk(items, 3)
			//console.info('chunk: chunks', chunks)

			expect(chunks.length).to.equal(3)
			expect(chunks[0].length).to.equal(3)
			expect(chunks[1].length).to.equal(3)
			expect(chunks[2].length).to.equal(2)
		})

		it('should chunk array of items evenly', () => {
			
			const items: TestItem[] = testItemHelper.createMockedItems(9)

			//console.info('chunk: items', items)
			const chunks = arrayUtils.chunk(items, 3)
			//console.info('chunk: chunks', chunks)

			expect(chunks.length).to.equal(3)
			expect(chunks[0].length).to.equal(3)
			expect(chunks[1].length).to.equal(3)
			expect(chunks[2].length).to.equal(3)
		})

	})
})
