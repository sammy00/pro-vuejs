# Chapter 04. Essential JavaScript Primer

## Preparing for This Chapter

1. create the project

```bash
vue create jsprimer --default
```

2. switch off some eslint rules by the `eslintConfig.rules` field in `package.json`

```js
"rules": {
  "no-console": "off",
  "no-declare": "off",
  "no-unused-vars": "off"
},
```

## Using Statements

- Each statement represents a single command
- Statements are usually terminated by a **optional** semicolon (;)
- Semicolons make your code easier to read and allows for multiple statements on a single line

examples go as

```js
console.log("Hello")
console.log("Apples")
console.log("This is a statement")
console.log("This is also a statement")
```

## Defining and Using Functions

- A function packages statements into group, which won't be executed until the function is invoked
- Declaration
  - use the `const` keyword followed by the function name
  - followed by the equal sign (`=`) and the `function` keyword
  - followed by parentheses (the `(` and `)` characters)
  - encloses the statements to group between braces (the `{` and `}` characters)

demo as Listing 4-6 below

```js
const myFunc = function() {
  console.log("This statement is inside the function")
}

console.log("This statement is outside the function")

myFunc()
```

> Modern JS features can be queried through website caniuse.com

### Defining Functions with Parameters

demo as Listing 4-8 below

```js
function myFunc(name, weather) {
  console.log("Hello" + name + ".")
  console.log("It is" + weather + "today.")
}

myFunc("Adam", "sunny")
```

#### Using Default and Rest Parameters

- If you call the function with fewer arguments than parameters it requires, then any parameters without supplied values is evaluated as `undefined`
- If you call the function with more arguments than wanted parameters, then the additional arguments are ignored
- **polymorphism** isn't available in JS. For functions defined with the same name, the later one wins
- 2 ways to respond to a mismatch between #(parameters) and #(arguments) for functions

  - **Default parameters** deal with the situation where there are fewer arguments than parameters, and they allow you to provide a default value for the parameters for which there are no arguments (demo as Listing 4-9 below)

    ```js
    function myFunc(name, weather = "raining") {
      console.log("Hello" + name + ".")
      console.log("It is" + weather + "today.")
    }

    myFunc("Adam")
    ```

  - **Rest parameters** are used to capture any additional arguments when a function is invoked with additional arguments (demo as Listing 4-10 below)

    ```js
    function myFunc(name, weather, ...extraArgs) {
      console.log("Hello" + name + ".")
      console.log("It is" + weather + "today.")
      for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg:" + extraArgs[i])
      }
    }

    myFunc("Adam", "sunny", "one", "two", "three")
    ```

    > The rest parameter must be the last parameter defined by the function, and its name is prefixed with an ellipsis (three periods, `...`)

### Defining Functions That Return Results

- use the `return` keyword (demo as Listing 4-11 below)

```js
function myFunc(name) {
  return "Hello" + name + "."
}

console.log(myFunc("Adam"))
```

- you don't have to declare that the function will return a result or denote the data type of the result

### Using Functions as Arguments to Other Functions

- JS functions can be treated as objects

```js
function myFunc(nameFunction) {
  return "Hello" + nameFunction() + "."
}

console.log(
  myFunc(function() {
    return "Adam"
  })
)
```

#### Using Arrow Functions

- often used to define functions that are used only as arguments to other functions (demo as Listing 4-14 below)

```js
const myFunc = (nameFunction) => "Hello" + nameFunction() + "."

const printName = (nameFunction, printFunction) =>
  printFunction(myFunc(nameFunction))

printName(function() {
  return "Adam"
}, console.log)
```

- a.k.a., fat arrow functions or lambda expressions
- 3 parts
  - input parameters
  - the fat arrow `=>`
  - function result
- The `return` keyword and **curly braces** are required only if the arrow function needs to execute more than one statement

## Using Variables and Types

- The `let` keyword is used to declare variables and, optionally, assign a value to the variable in a single statement
- When you use `let` or `const`, the variable or constant that you create can be accessed only in the region of code in which they are defined, which is known as the variable or constant's scope (demo as [Listing 4-15](ac7428614323c699217fe17d5e0f26c379070b7f))

> It is good practice to use the const keyword for any value that you don't expect to change so that you receive an error if any modifications are attempted

- The problem is that the var keyword creates variables whose scope is the containing function, which means that all the references to message are referring to the same variable (demo as [Listing 4-16](0e210a4c2e5c60c57eebdd25c454008dcaf656b2))

> If you define a function inside another function—creating inner and outer functions—then the inner function is able to access the outer function's variables, using a feature called closure
>
> ```js
> function myFunc(name) {
>   let myLocalVar = "sunny"
>   let innerFunction = function() {
>     return "Hello" + name + ". Today is" + myLocalVar + "."
>   }
>
>   return innerFunction()
> }
>
> console.log(myFunc("Adam"))
> ```

### Using the Primitive Types

> - Variables that have been declared but not assigned a value are `undefined`
> - the `null` value is used to indicate that a variable has no value, just as in other languages
> - `Symbol` is an immutable value that represents a unique ID

#### Booleans

- 2 possible values: `true` or `false`

#### Strings

- defined using either the double quote or single quote characters as

```js
let firstString = "This is a string"
let secondString = "And so is this"
```

- useful string properties and methods

  |                          name | description                                                                                                                                                  |
  | ----------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
  |                      `length` | a property returns the number of characters in the string                                                                                                    |
  |               `charAt(index)` | returns a string containing the character at the specified index                                                                                             |
  |              `concat(string)` | returns a new string that concatenates together the string on which the method is called and the string provided as an argument                              |
  |        `indexOf(term, start)` | returns the first index at which term appears in the string or -1 if there is no match. The optional start argument specifies the start index for the search |
  |      `replace(term, newTerm)` | returns a new string in which all instances of term are replaced with newTerm                                                                                |
  |           `slice(start, end)` | returns a substring containing the characters between the start and end indices                                                                              |
  |                 `split(term)` | splits up a string into an array of values that were separated by term                                                                                       |
  | `toUpperCase()/toLowerCase()` | return new strings in which all the characters are uppercase or lowercase                                                                                    |
  |                      `trim()` | returns a new string from which all the leading and trailing whitespace characters have been removed                                                         |

##### Template Strings

- Template strings begin and end with backticks (the \` character), and data values are denoted by curly braces preceded by a dollar sign
- Template strings allow data values to be specified inline (demo as [Listing 4-19](6a9eabd6ecfa69c02722f96e5b00d9f7f26f0adc))
  - help reduce errors
  - result in a more natural development experience

#### Number

## Using JavaScript Operators

### Conditional Statements

### The Equality Operator vs. the Identity Operator

### Explicitly Converting Types

#### Numbers to Strings

#### Strings to Numbers

## Working with Arrays

### Array Literal

### Reading and Modifying the Contents of an Array

### Enumerating the Contents of an Array

### Using the Spread Operator

### Using the Built-in Array Methods

## Working with Objects

### Object Literals

#### Using Variables as Object Properties

### Using Functions as Methods

### Copying Properties from One Object to Another

## Understanding JavaScript Modules

### Creating and Using a Simple JavaScript Module

#### Using a Simple JavaScript Module

### Defining Multiple Features in a Module

#### Changing Module Feature Names

#### Importing an Entire Module

### Combining Multiple Files in a Module

#### Importing Individual Features from a Multifile Module

### Understanding JavaScript Promises

#### Understanding the Asynchronous Operation Problem

#### Using a JavaScript Promise

#### Simplifying the Asynchronous Code
