describe("toBe or not.toBe",()=>{
    test("3 is 3",()=>{
        expect(3).toBe(3)
    })

    test("Boolean balues",()=>{
        expect(true).toBe(true)
        expect(false).toBe(false)
        expect(false).not.toBe(true)
        
    })

})

describe("Test for reference data types",()=>{
    test("{} !=={}",()=>{
        expect({}).not.toBe({})
    })

    test("[] !==[]",()=>{
        expect([]).not.toBe([])
    })

    test("Object a===Object a",()=>{
        let a={}
        expect(a).toBe(a)
    })
})

describe ("toEqual",()=>{
    test("[] is equal to []",()=>{
        expect([]).toEqual([])
    })
    test("[1,2,3,4] to not equal []", ()=>{
        expect([1,2,3,4]).not.toEqual([])
    })

    test("[1,2,[3,4]] is equal to [1,2,[3,4]]",()=>{
        expect([1,2,[3,4]]).toEqual([1,2,[3,4]])
    })

    test("nested arrays",()=>{
        let a=[1,2,3]
        let b=[a,a]
        let c=[[1,2,3],a]
        expect(b).toEqual(c)
    })
})

describe("test relational operator",()=>{
    test("100+100<=200",()=>{
        expect(100+100).toBeLessThan(201)
    })
    test("100+100<=200",()=>{
        expect(100+100).toBeLessThan(201)
    })
    test("100+100<=200",()=>{
        expect(100+100).toBeLessThan(201)
    })
})