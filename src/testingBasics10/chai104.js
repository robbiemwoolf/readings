//More with chai

// documentation for chai https://www.chaijs.com/api/bdd/

// to.equal() is only one way the assertion library Chai allows you to test your code
//to.be.a() method check's the expected result's data type
    expect("Score").to.be.a("string");
    expect(10).to.be.a("number");
//to.be.an() method works the same way
    expect({}).to.be.an("object");

//if you are following a strict TDD process you will use these types of simple methods but as you get further along in the test writing it may be extraneous because this same thing could be checked in a more specific test like to.equal()

//to.equal versus to.eql
//strictly equal versus deeply equal

//Most common expect() methods:
    //empty
    //include()
    //lengthOf()
    //true

//it is generally preferred to use the specific methods (like to.have.lengthOf()) when possible, because it makes the code and error messages easier to understand