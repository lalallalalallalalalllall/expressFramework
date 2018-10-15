const nock = require('nock')
const request = require('request-promise')
const expect = require('chai').expect

// afterEach(() => {
//     nock.cleanAll()
//   });

describe("Testing inside a subfolder", function () {

    it("should be working normally", (done) => {

        //specify the url to be intercepted
        nock("http://api.postcodes.io")
            //define the method to be intercepted
            .get('/postcodes/')
            //respond with a OK and the specified JSON response
            .reply(200, {
                "status": 200,
                "message": "This is a mocked response"
            });

        //perform the request to the api which will now be intercepted by nock
        request.get('http://api.postcodes.io/postcodes/').then(res => {
            res = JSON.parse(res)
            expect(res.message).to.equal("This is a mocked response")
            done()
        })
    })
});


