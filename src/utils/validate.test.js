import validate from './validate';

describe('Validate should validate object against required rules and return a isValid boolean', () => {

    const requiredRules = {
        id: false,
        first: true,
        last: true,
        age: true,
        description: true,
        thumbnail: false
    };

    let user = {};

    beforeEach(() => {
        user = {
            id: 0,
            first: '',
            last: '',
            age: '',
            description: '',
            thumbnail: ''
        };
    });

    it('should NOT be valid - A', () => {
        const isValid = validate(user, requiredRules);
        expect(isValid).toEqual(false);
    });

    it('should NOT be valid - B', () => {
        user.first = 'Henry';

        const isValid = validate(user, requiredRules);
        expect(isValid).toEqual(false);
    });

    it('should NOT be valid - C', () => {
        user.first = 'Henry';
        user.last = 'Math';

        const isValid = validate(user, requiredRules);
        expect(isValid).toEqual(false);
    });

    it('should NOT be valid - D', () => {
        user.first = 'Henry';
        user.last = 'Math';
        user.age = '28';

        const isValid = validate(user, requiredRules);
        expect(isValid).toEqual(false);
    });

    it('should be valid - A', () => {
        user.first = 'Henry';
        user.last = 'Math';
        user.age = '28';
        user.description = 'desc';

        const isValid = validate(user, requiredRules);
        expect(isValid).toEqual(true);
    });

    it('should be valid - B', () => {
        user.first = 'Henry';
        user.last = 'Math';
        user.age = '28';
        user.description = 'desc';
        user.thumbnail = 'http://....';

        const isValid = validate(user, requiredRules);
        expect(isValid).toEqual(true);
    });

});
