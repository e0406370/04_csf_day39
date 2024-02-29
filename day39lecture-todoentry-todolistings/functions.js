// scalar

const name = "fred";

// reference

const employee = {
  name: "fred",
  email: "fred@gmail.com",
};

const hello = (name) => {
  return `hello ${name}`;
};

console.info("name ", name);
console.info("employee ", employee);

console.info("hello: ", hello);

/////

// functional type

const hello2 = function (name) {
  return `Hello ${name}`;
};

let h = hello2;

// <button type="button" (click)="process($event)"
/*
  prom.then(
    result => {
    
    }
  )
*/

// same as in Javascript
/*
  prom.then(
    function(result) {
    
    }
  )
  arr.filter, map, forEach ...
  arr.map(v => {})

  thrPool.submit(
    () -> {
      System.out.printf("hello, world\n");
    }
  )
*/

// f -> fn. , a -> val.
function apply(f, a) {
  return f(a);
}

console.info("apply(hello, name): ", apply(hello2, name));
console.info(
  "apply(hello, apply(hello, name)): ",
  apply(hello2, apply(hello2, name))
);

console.info("apply: ", apply);
console.info("hello: ", hello);
console.info("h: ", h);

console.info("hello fred: ", hello2("fred"));
console.info("hello barney: ", h("barney"));

// higher order functions //

// name is a local variable that exists within hello3
// scope is differnt from sayHello
// name is a BOUNDED variable
const hello3 = (name) => {
  return `Hello ${name}`;
};

const apply3 = (func, value) => func(value);

// name is a local variable that exists outside hello3
// scope is different from hello3
// name is a FREE variable
const sayHello = (name) => {
  const t = () => {
    return hello3(name);
  };

  return t;
};

const helloFred = sayHello("fred");
const helloBarney = sayHello("barney");

console.info("helloFred: ", helloFred);
console.info("helloBarney: ", helloBarney());

// bounded and free variables

// currying
const curry = (func, value) => {
  return function () {
    return func(value, ...arguments);
  };
};
