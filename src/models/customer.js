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
  set name(val){
    this._name = val;
  }

  get email(){
    return this._name;
  }
  set email(val){
    this._name = val;
  }

  static all() {
    return dummy.generate(spec, null, 10).map((attrs) => new Customer(attrs));
  }
}


module.exports = Customer;
