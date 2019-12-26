var dummy = require('dummy-data');

var spec = {
  name: "String",
  email: "String"
};

class User {
  constructor(attrs){
    this._name = attrs.name;
  };

  get name(){
    return this._name;
  }
  set name(val){
    this._name = val;
  }

  static all() {
    return [
      new User({ name: 'Homer' }),
      new User({ name: 'Lisa' }),
      new User({ name: 'Bart' })
    ];
  }
}


module.exports = User;
