

//Esto era un experimento
export const join = (aArray, bArray, aId, bId) => {
    let result = [];
    for (const a of aArray) {
        for (const b of bArray) {
            if (a[aId] === b[bId]) {
                a[aId] = b[bId];
                break;
            }
        }
        result.push(a);
    }
    console.log('result', result)
    return result;
}