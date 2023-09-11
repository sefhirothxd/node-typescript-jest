import { charates} from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring',()=>{
    test('charates should contain flash, superman and batman', () => { 

        const  [flash, superman, batman] = charates;

        // order is important
        expect(flash).toBe('flash');
        expect(superman).toBe('superman');
        expect(batman).toBe('batman');

        //contain here is like toBe
        expect(charates).toContain('flash');
        expect(charates).toContain('superman');
        expect(charates).toContain('batman');
     })
})