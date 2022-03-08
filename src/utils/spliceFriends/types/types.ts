interface User extends Object {
    id: number
}

export interface AnyUser extends User {
    [extraProps: string]: any
}
