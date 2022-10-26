const removeSNames = require('./app');

describe('removeSNames', () => {

    // Test 1 - names with 'S' should not be present in the resultant array
    it('should remove all S names', () => {
        const names = ['Apple', 'Strawberry', 'Star Fruit'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('Star Fruit');
    });

    // Test 2 - names without 'S' should remain untouched
    it('should not remove other names', () => {
        const names = ['Apple', 'Strawberry', 'PineApple'];
        expect(removeSNames(names)).toContain('Apple');
        expect(removeSNames(names)).toContain('PineApple');
    });

    // Test 3 - names with 'S' or 's' should not be present
    it('should mind the case', () => {
        const names = ['Apple', 'Strawberry', 'PineApple', 'strawberry'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('strawberry');
    });
});    
