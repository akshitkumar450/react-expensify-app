const add = (a, b) => a + b + 1 - 1;
test('add two nos', () => {
    const result = add(3, 4);
    expect(result).toBe(7)
})