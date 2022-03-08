import {AnyUser} from './types';

export const spliceFriends = <D extends AnyUser[]>(items: D): D => {
    let arr: number[] = []
    items.forEach(({id}) => arr.push(id))
    while (items.length > 5) {
        const index = Math.floor(Math.random() * arr.length)
        const idByIndex = arr[index]
        if (items.findIndex(({id}) => id === idByIndex) > 0) {
            items.splice(index, 1)
            arr.splice(index, 1)
        }
    }
    return items
}