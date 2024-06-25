import { sayHello } from "../src/say-hello"
describe    ("tipe-data", () => {
    test        ("tipe-data", () => {        
        expect(sayHello("canok")).toBe("Hello canok!")
    })      
})