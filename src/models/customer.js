var dummy = require('dummy-data');

var spec = {
  name: "String",
  email: "String"
};

class Customer {
  constructor(attrs){
    this._name = attrs.name;
    this._email = attrs.email;
  };

  get name(){
    return this._name;
  }

  get email(){
    return this._name;
  }
  
  static all() {
    return dummy.generate(spec, null, 10).map((attrs) => new Customer(attrs));
  }
}


module.exports = Customer;
