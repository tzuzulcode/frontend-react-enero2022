import Calculator from "./calc"

const mock = jest.fn() // Crear una funcion
const fetch = jest.fn() // Crear una funcion

const fakeAdd = mock.mockImplementation((a,b)=>{
    return a+b
}) // Mock function

const fakeRequest = fetch.mockImplementation(
    ()=>Promise.resolve({name:"Tzuzul"})
) // Stub

//Matcher custom
expect.extend({
    toMatchJSON(received,argument){
        if(received===argument){
            return {
                pass:true,
                message:()=>'Matched'
            }
        }else{
            return {
                pass:false,
                message:()=>'No matched'
            }
        }
    }
})

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

    it("object in array",()=>{
        const users = [
            {
                name:"Tzuzul"
            }
        ]

        let a = {
            name:"Tzuzul"
        }

        let b = {
            name:"Tzuzul"
        }

        expect(a.name).toBeDefined() // Verifica si cierta valor no es nula


        if (a==b){

        } //false

        let arreglo = [a,b]

        arreglo[0]==={
            name:"Tzuzul"
        }//falso

        expect(users).toContainEqual({
            name:"Tzuzul"
        }) // Extra: Compara el contenido de los objetos/arreglos

        // expect(users).toContain(users[0])
    })

    it("fake add should add two values",()=>{
        expect(fakeAdd(5,5)).toEqual(10)
    })

    it("Fake request should resolve the user",()=>{
        fakeRequest()
        .then(x=>console.log(x))
        expect(fakeRequest).toHaveBeenCalled()
    })


})

// describe('calculator', () => { 
//     it('add two numbers',()=>{
//         expect(add(5,5)).toEqual(10) //Assert: Condicion
//     })
// })