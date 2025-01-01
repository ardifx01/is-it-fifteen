# is-it-fifteen

**is-it-fifteen** is a lightweight utility to check if a given number is equal to **15**. This package is designed for quick number checks, especially when you need to validate if a number matches the value 15.

## Features

- Simple and easy-to-use function to check if a number is **15**.
- Works seamlessly in both **JavaScript** and **TypeScript** environments.
- No dependencies—just a pure, lightweight solution.
- Provides a TypeScript declaration file for type safety.

## Installation

You can install the package from NPM by running the following command:

```bash
npm install is-it-fifteen
```

Or if you are using Yarn:

```bash
yarn add is-it-fifteen
```

## Usage

### JavaScript

Once installed, you can import and use the function in your JavaScript project like this:

```javascript
const isFifteen = require('is-it-fifteen')

console.log(isFifteen(15)) // true
console.log(isFifteen(10)) // false
console.log(isFifteen(25)) // false
```

### TypeScript

If you are using TypeScript, the package comes with built-in TypeScript type definitions, so you get full type support out of the box.

```typescript
import isFifteen from 'is-it-fifteen'

console.log(isFifteen(15)) // true
console.log(isFifteen(10)) // false
console.log(isFifteen(100)) // false
```

## API

### `isFifteen(number: number): boolean`

- **number** (`number`): The number to check.
- **Returns**: A boolean value (`true` if the number is 15, `false` otherwise).

#### Example:

```typescript
console.log(isFifteen(15)) // true
console.log(isFifteen(20)) // false
console.log(isFifteen(-15)) // false
```

## TypeScript Support

This package fully supports TypeScript, providing type definitions (`.d.ts`) for better development experience. You can use it directly in your TypeScript projects without needing to install additional type packages.

### Example TypeScript Declaration:

```typescript
import isFifteen from 'is-it-fifteen'

const result: boolean = isFifteen(15) // type-safe usage
```

## Contributing

Contributions are welcome! Feel free to open issues, create pull requests, or suggest improvements. To contribute, please fork the repository and submit your changes.

### Steps to contribute:

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Write tests if applicable.
5. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the **MIT License**.
