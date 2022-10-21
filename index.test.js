const sum = require('./index')

describe("Testing the sum function", ()=>{


    test("Add 2 positive numbers",()=>{
        expect(sum(1,2)).toBe(3)
    })

    test("Add 2 negative numbers",()=>{
        expect(sum(-1,-2)).toBe(-3)
    })


    test("Add 2 floating numbers",()=>{
        expect(sum(1.5,1.5)).toBe(3)
    })

    test("Add 1 positive and 2 is negative",()=>{
        expect(sum(-2,2)).toBe(0)
    })

    test("Add 2 floating numbers",()=>{
        expect(sum("1.5",1.5)).toBe(3)
    })

    test("invoke sum function with no arguments",()=>{
        expect(sum()).toBe("Sum function should needs invoked with atleast 2 arguments")
    })

    test("invoke sum function with one arguments",()=>{
        expect(sum(1.5)).toBe("Sum function needs one arguments")
    })

    test("Add 3 numbers",()=>{
        expect(sum(1.5,2,3)).toBe(6.5)
    })

    
})


// expectation => Actual result