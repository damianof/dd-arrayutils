export interface TestItem {
	id: number
	name: string
	selected: boolean
}

export class TestItemHelper {
	private shuffle<T>(a: T[]): void {
		for (let i: number = a.length - 1; i > 0; i--) {
			const j: number = Math.floor(Math.random() * (i + 1))
			const tmp = a[i]
			a[i] = a[j]
			a[j] = tmp
		}
	}

	createMockedItems(max: number): TestItem[] {
		const items: TestItem[] = []

		for (let i = 1; i <= max; i++ ) {
			items.push({
				id: i,
				selected: false,
				name: `${ String.fromCharCode(64+i) } Item`
			})
		}

		this.shuffle<TestItem>(items)

		return items
	}
}

export const testItemHelper = new TestItemHelper()
