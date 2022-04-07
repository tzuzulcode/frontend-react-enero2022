import Calculator from "./calc"

describe("calculator",()=>{
    let add,sub
    beforeEach(()=>{
        const calculator = new Calculator()
        add = calculator.add
        sub = calculator.sub
    })
    describe("should perform addition",()=>{
        it("add two positive numbers",()=>{
            expect(add(5,5)).toEqual(10) //Assert: Condicion
        })
        it("add two negative numbers",()=>{
            expect(add(-5,-3)).toEqual(-8)
        })
        it("add one positive and one negative numbers",()=>{
            expect(add(7,-3)).toEqual(4)
        })
    })
    
    it("should perform subtraction",()=>{
        expect(sub(5,5)).toEqual(0)
    })
})

// describe('calculator', () => { 
//     it('add two numbers',()=>{
//         expect(add(5,5)).toEqual(10) //Assert: Condicion
//     })
// })