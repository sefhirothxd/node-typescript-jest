import { buildMakePerson } from "../../src/js-foundation/05-factory";



describe("Factory 05-factory.ts", () => {

    const getId = () => "1234";
    const getAge = ()=> 30;
  test("should create a person", () => {
    const makePerson = buildMakePerson({getId,getAge});
    expect(typeof makePerson).toBe("function");
  });

  test("should create a person", () => {
    const makePerson = buildMakePerson({getId,getAge});
    const person = makePerson({ name: "jhon", birthDate: "1990-10-10" });
    expect(person).toEqual({
        id: "1234",
        name: "jhon",
        birthDate: "1990-10-10",
        age: 30,
    });
  });
}); 