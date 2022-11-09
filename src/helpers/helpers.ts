export const createArrayOfIds = (size: number): number[] => {
    const array = [] as number[];
    for (let i = 1; i <= size; i++) {
        array.push(i);
    }
    return array
}
