let assert = require("assert");
let isFromBellville = require("../isFromBellville");


describe('Test for my Bellville function' , function(){
    it("it should return true if the registration number starts with 'CY 123' " , function(){
        assert.equal(true,isFromBellville("CY 123"));

    });
    it("it should return false if the registration number starts with 'CJ 123' " , function(){
        assert.equal(false,isFromBellville("CJ 123 "));

    });
    it("it should return true if the registration number starts with 'CY 123' " , function(){
        assert.equal(true,isFromBellville("CY 123 "));

    });

});