import {getUserById} from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks',()=>{
    test('getUserById should return an error if user not exist', (done) => { 
        const id = 10;
        getUserById(id,(error,user)=>{
            expect(error).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            
            done();
        });
     })
    test('getUserById should return an user exist id=1', (done) => { 
        const id = 1;
        getUserById(id,(error,user)=>{

            // test object comparation

            expect(user).toEqual({
                id: 1,
                name: 'Jhon Doe',
            },);
            expect(error).toBeUndefined();

            done();
        });
     })
});