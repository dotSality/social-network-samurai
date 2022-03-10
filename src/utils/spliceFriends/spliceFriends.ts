import {UserType} from '../../bll/users-reducer';

export const spliceFriends = (items: UserType[]): UserType[] => {
    let arr: number[] = []
    let result = []
    items.forEach(({id}) => arr.push(id))
    while (items.length > 0 && result.length < 6) {
        const index = Math.floor(Math.random() * arr.length)
        const idByIndex = arr[index]
        if (items.findIndex(({id}) => id === idByIndex) > 0) {
            const user = items.find(({id}) => id === idByIndex)
            if (user) {
                result.push(user)
                items.splice(index, 1)
                arr.splice(index, 1)
            }
        }
    }
    return result
}