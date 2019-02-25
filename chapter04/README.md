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
- Template strings allow data values to be specified inline (demo as Listing 4-19)
  - help reduce errors
  - result in a more natural development experience

#### Number

- The `number` type is used to represent both **integer** and **floating-point** numbers (also known as real numbers)

demo as Listing 4-20 below

```js
let daysInWeek = 7
let pi = 3.14
let hexValue = 0xffff
```

## Using JavaScript Operators

- useful JS operators

|                operator | description                                                        |
| ----------------------: | :----------------------------------------------------------------- |
|             `++`， `--` | Pre- or post-increment and decrement                               |
| `+`, `-`, `*`, `/`, `%` | Addition, subtraction, multiplication, division, remainder         |
|    `<`, `<=`, `>`, `>=` | Less than, less than or equal to, more than, more than or equal to |
|              `==`, `!=` | Equality and inequality tests                                      |
|            `===`, `!==` | Identity and nonidentity tests                                     |
|              `&&`, `||` | Logical AND and OR ( `||` is used to coalesce null values)         |
|                     `=` | Assignment                                                         |
|                     `+` | String concatenation                                               |
|                    `?:` | Three operand conditional statement                                |

### Conditional Statements

- 2 common ones: `if/else` and `switch`
- demo as Listing 4-21

### The Equality Operator vs. the Identity Operator

- The equality operator will attempt to coerce (convert) operands to the same type to assess equality (demo as Listing 4-22)
- The identity operator assess the equality of both the values and types of the operands (demo as Listing 4-23)

### Explicitly Converting Types

- The string concatenation operator (`+`) has precedence over the addition operator (also `+`)

demo as Listing 4-24

#### Numbers to Strings

- `toString()` method (demo as Listing 4-25)
- Numberic literals have to be placed in parentheses before calling the `toString()` to handle the implicit conversion of numbers to strings
- `String(n)` converts a number `n` to string
- useful number-to-string methods

|             method | description                                                                                                                                  |
| -----------------: | :------------------------------------------------------------------------------------------------------------------------------------------- |
|       `toString()` | This method returns a string that represents a number in base 10.                                                                            |
| `toString(2/8/16)` | This method returns a string that represents a number in binary, octal, or hexadecimal notation.                                             |
|       `toFixed(n)` | This method returns a string representing a real number with n digits after the decimal point.                                               |
| `toExponential(n)` | This method returns a string that represents a number using exponential notation with one digit before the decimal point and n digits after. |
|   `toPrecision(n)` | This method returns a string that represents a number with n significant digits, using exponential notation if required.                     |

#### Strings to Numbers

|            method | description                                                                 |
| ----------------: | :-------------------------------------------------------------------------- |
|     `Number(str)` | This method parses the specified string to create an integer or real value. |
|   `parseInt(str)` | This method parses the specified string to create an integer value.         |
| `parseFloat(str)` | This method parses the specified string to create an integer or real value. |

## Working with Arrays

### Array Object

- create a new Array by calling `new Array()` (demo as Listing 4-27)
- size of array is optional
- array can hold any mix of data types

### Array Literal

```js
let myArray = [100, "Adam", true]
```

### Reading and Modifying the Contents of an Array

- read/write the value at a given index using square braces (`[` and `]`), placing the index you require between the braces (demo as Listing 4-29 and 4-30)

### Enumerating the Contents of an Array

- using a `for` loop or using the `forEach` method (demo as Listing 4-31)
- `length` property tells the #(elements) in array
- the callback to `forEach` takes two arguments
  - the value of the current item
  - the position of item in the array

### Using the Spread Operator

- expand an array so that its contents can be used as function arguments (demo as Listing 4-32)
- The spread operator is an ellipsis (a sequence of three periods), and it causes the array to be unpacked
- The spread operator also makes it easy to concatenate arrays together (demo as Listing 4-33)

### Using the Built-in Array Methods

|                 method | description                                                                                                                                                         |
| ---------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|   `concat(otherArray)` | This method returns a new array that concatenates the array on which it has been called with the array specified as the argument. Multiple arrays can be specified. |
|      `join(separator)` | This method joins all the elements in the array to form a string. The argument specifies the character used to delimit the items.                                   |
|                `pop()` | This method removes and returns the last item in the array.                                                                                                         |
|              `shift()` | This method removes and returns the first element in the array.                                                                                                     |
|           `push(item)` | This method appends the specified item to the end of the array.                                                                                                     |
|        `unshift(item)` | This method inserts a new item at the start of the array.                                                                                                           |
|            `reverse()` | This method returns a new array that contains the items in reverse order.                                                                                           |
|     `slice(start,end)` | This method returns a section of the array.                                                                                                                         |
|               `sort()` | This method sorts the array. An optional comparison function can be used to perform custom comparisons.                                                             |
| `splice(index, count)` | This method removes count items from the array, starting at the specified index. The removed items are returned as the result of the method.                        |
|        `unshift(item)` | This method inserts a new item at the start of the array.                                                                                                           |
|          `every(test)` | This method calls the test function for each item in the array and returns `true` if the function returns `true` for all of them and false otherwise                |
|           `some(test)` | This method returns true if calling the test function for each item in the array returns true at least once.                                                        |
|         `filter(test)` | This method returns a new array containing the items for which the test function returns `true`.                                                                    |
|           `find(test)` | This method returns the first item in the array for which the test function returns `true`.                                                                         |
|      `findIndex(test)` | This method returns the index of the first item in the array for which the test function returns `true`.                                                            |
|    `forEach(callback)` | This method invokes the callback function for each item in the array, as described in the previous section.                                                         |
|      `includes(value)` | This method returns true if the array contains the specified value.                                                                                                 |
|        `map(callback)` | This method returns a new array containing the result of invoking the callback function for every item in the array.                                                |
|     `reduce(callback)` | This method returns the accumulated value produced by invoking the callback function for every item in the array.                                                   |

## Working with Objects

- create object with `new Object()` as Listing 4-35

### Object Literals

- Each property defined is separated from its value using a colon (`:`), and properties are separated using a comma (`,`) (demo as Listing 4-36)

```js
let myData = {
  name: "Adam",
  weather: "sunny",
}
```

#### Using Variables as Object Properties

- If you use a variable as an object property, JavaScript will use the variable name as the property name and the variable value as the property value (demo as Listing 4-37)

### Using Functions as Methods

- A function defined on an object is called a method (demo as Listing 4-38)
- Within a method of an object, `this` keyword points to the object calling the method
- Methods can be defined without using the `function` keyword (demo as Listing 4-39)

### Copying Properties from One Object to Another

- by the `Object.assign` function (demo as Listing 4-40)

## Understanding JavaScript Modules

### Creating and Using a Simple JavaScript Module

- Modules are typically defined in their own folders (demo as Listing 4-41)
- two keywords
  - `export` denote the feature will be available outside the module
    > By default, the contents of the JavaScript file are private and must be explicitly shared using the export keyword before they can be used in the rest of the application
  - `default` is used when the module contains a **single** feature

#### Using a Simple JavaScript Module

- by the `import` keyword (demo as Listing 4-42)

> The identifier of imported module is defined by the caller

- module locations
  - For modules you have defined yourself, the location is specified as a relative path, starting with one or two periods, indicating that the path is relative to the current file or to the current file's parent directory
  - Another alternative is using the `@` aliasing the project folder
  - If you omit the initial `periods` and the `@` character, then the import statement declares a dependency on a module in the **node_modules** folder

### Defining Multiple Features in a Module

Definition in the `maths/operations.js`

```js
export function multiply(values) {
  return values.reduce((total, val) => total * val, 1)
}

export function subtract(amount, values) {
  return values.reduce((total, val) => total - val, amount)
}

export function divide(first, second) {
  return first / second
}
```

Using as

```js
import additionFunction from "./maths/sum"
import { multiply, subtract } from "./maths/operations"

let values = [10, 20, 30, 40, 50]

console.log(`Sum: ${additionFunction(values)}`)
console.log(`Multiply: ${multiply(values)}`)
console.log(`Subtract: ${subtract(1000, values)}`)
```

#### Changing Module Feature Names

- If you don't want to use the names provided by the module, then you can specify a name using the `as` keyword (demo as Listing 4-45)

#### Importing an Entire Module

- An **asterisk** is used to import everything in a module, followed by the `as` keyword and an identifier through which the module functions and values will be accessed

### Combining Multiple Files in a Module

- Modules can span multiple files and are combined by defining an `index.js` file that brings together the features that the module will provide to the rest of the application (demo as Listing 4-47 and Listing 4-48)

#### Importing Individual Features from a Multifile Module

demo as Listing 4-49

### Understanding JavaScript Promises

- **DEFINITION**: A promise is a background activity that will be completed at some point in the future

#### Understanding the Asynchronous Operation Problem

- an example goes as Listing 4-50
- The `setTimeout` function invokes a function asynchronously after a specified delay
- the result returned from asynchronous work is `undefined` until the work is done (demo as Listing 4-51)

#### Using a JavaScript Promise

- A mechanism that allows us to observe the asynchronous task so that we can wait for it to complete and then write out the result (demo as Listing 4-52)
- Wrap the function `f` to observe within a `Promise` object.
- The observed function is provided with a callback that is invoked when the asynchronous task has completed and that accepts the result of the task as an argument.
- Invoking the callback function is known as _resolving_ the promise
- The result passed to the callback is provided to the `then` function (demo as Listing 4-53)

#### Simplifying the Asynchronous Code

- two keywords -- `async` and `await` —- that support asynchronous operations without having to work directly with promises (demo as Listing 4-54)
- **These keywords can be applied only to functions**
- The `async` keyword tells JavaScript that this function relies on functionality that requires a promise
- The `await` follow by a promise would produce the result provided to the `Promise` object's callback and then executing the statements that follow
- `await` can be used only in `async` function
