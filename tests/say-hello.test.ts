import { sayHello } from "../src/say-hello"
describe("sayHello", () => {

    test("sayHello", () => {        
        expect(sayHello("canok")).toBe("Hello canok!")
    })      
})