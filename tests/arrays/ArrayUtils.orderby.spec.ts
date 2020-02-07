import { expect } from 'chai'
import { arrayUtils } from '@/arrays/ArrayUtils'
import { TestItem, testItemHelper } from '@tests/TestItemHelper'

describe('ArrayUtils', () => {

	describe('orderBy', () => {

		it('should sort item array correctly by name when two items have the same name', () => {
			
			const items: TestItem[] = [{
				id: 1,
				selected: false,
				name: 'A Item'
			}, {
				id: 2,
				selected: false,
				name: 'A Item'
			}]
			arrayUtils.orderBy(items, 'name')
			console.info('items: orderby name', items)

			expect(items[0].id).to.equal(1)
			expect(items[1].id).to.equal(2)

		})

		it('should sort items with different names correctly by name', () => {
			
			const items: TestItem[] = testItemHelper.createMockedItems(3)
			arrayUtils.orderBy(items, 'name')
			//console.info('items: orderby name', items)

			expect(items[0].id).to.equal(1)
			expect(items[1].id).to.equal(2)
			expect(items[2].id).to.equal(3)

		})

		it('should sort items with different ids correctly by id', () => {
			
			const items: TestItem[] = testItemHelper.createMockedItems(3)
			arrayUtils.orderBy(items, 'id')
			//console.info('items: orderby id', items)

			expect(items[0].id).to.equal(1)
			expect(items[1].id).to.equal(2)
			expect(items[2].id).to.equal(3)

		})

	})
})
