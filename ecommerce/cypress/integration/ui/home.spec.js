const url = "http://localhost:3000/"

describe('Home page', () => { 
    it("Visits the home page",()=>{
        cy.visit(url)
        cy.get('h1[data-test="h1"]').contains("Home")
    })

    it("Shows a list of products",()=>{
        cy.visit(url)
        cy.get('section[data-test="products"]').should("exist")
        cy.get('article.product-item').should("have.length",2)
        cy.get('article.product-item').should((products)=>{
            console.log(products)
            expect(products).to.have.length(2)

            const names = [...products].map(product => product.querySelector('h2').innerText)

            expect(names).to.deep.equal(['Producto de prueba editado','Producto de prueba'])
        })
    })
 })