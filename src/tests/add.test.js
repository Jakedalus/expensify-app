const add = (a, b) => a + b ;

const generateGreating = (name = 'Anonymous') => `Hello, ${name}!`;

test('should add 2 numbers', () => {
    const result = add(3, 4);
    
    expect(result).toBe(7);
});

test('should great using name', () => {
    const result = generateGreating('Jake');
    
    expect(result).toBe('Hello, Jake!');
});

test('should great using NO name', () => {
    const result = generateGreating();
    
    expect(result).toBe('Hello, Anonymous!');
});