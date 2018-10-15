

const sinon = require('sinon')
const expect = require('chai').expect



describe("Sample mock function" , function () {

    it("replace function with mock and check mock function is called ", (done) => {
        var testFunction = {
            add: (a, b) => {
                return a + b
            }
        }
        /**
         * A mock return value of the real function
         */
        var test = sinon.stub(testFunction, 'add').callsFake(
            (a , b) => {
                return {
                    "portfolioId" : "12321312312"
                }
            }
        )

        var x = testFunction.add(10, 11)
        var y = {
            "portfolioId" : "12321312312"
        }
        /**
         * For complexity object or array , use ```deep```
         */
        expect(test.called).to.eql(true)
         expect(x).to.deep.equal(y)
        done()
    })
});


