# @is-it/fifteen

**@is-it/fifteen** is a lightweight, flexible utility to check if a number equals **15**. With added options for loose comparison, binary numbers, negative values, and more, this package is designed to meet modern development needs while being simple to use.

## Features

- **Lightweight and Fast**: Minimal size for optimal performance.
- **Flexible Comparisons**: Supports strict or loose equality (`===` or `==`).
- **Binary Number Support**: Allows checking binary strings like `'1111'` (binary for 15).
- **Negative Number Checks**: Enables validation of `-15` when needed.
- **JavaScript and TypeScript Ready**: Comes with full TypeScript support for type safety.
- **No Dependencies**: Pure and lean package with zero dependencies.
- **Developer Friendly**: Easy to integrate with any project, big or small.

## Installation

Install the package via npm or any other package managers:

```bash
npm install @is-it/fifteen
```

## Usage

You can use **@is-it/fifteen** in both JavaScript and TypeScript projects.

### Basic Usage

```typescript
import { isItFifteen } from '@is-it/fifteen'

console.log(isItFifteen(15)) // true
console.log(isItFifteen('15', { strict: false })) // true
console.log(isItFifteen(-15, { allowNegative: true })) // true
console.log(isItFifteen('1111', { checkBinary: true })) // true
```

## API

### `isItFifteen(value: number | string, options?: CheckOptions): boolean`

Checks if a number or string is equal to 15 based on provided options.

#### Parameters:

1. **`value`** (`number | string`):  
   The number or string to check.
2. **`options`** (`CheckOptions`, optional):  
   An object to configure comparison behavior:
    - **`strict`** (`boolean`):  
      If `true`, uses strict equality (`===`) for comparison. Default is `true`.
    - **`allowNegative`** (`boolean`):  
      If `true`, allows checking for `-15`. Default is `false`.
    - **`checkBinary`** (`boolean`):  
      If `true`, treats binary strings like `'1111'` as valid input. Default is `false`.

#### Returns:

- **`boolean`**:  
  `true` if the value matches the criteria, otherwise `false`.

## Examples

### Strict Comparison (Default):

```javascript
console.log(isItFifteen(15)) // true
console.log(isItFifteen('15')) // false
```

### Loose Comparison:

```javascript
console.log(isItFifteen('15', { strict: false })) // true
console.log(isItFifteen(15, { strict: false })) // true
```

### Negative Number Support:

```javascript
console.log(isItFifteen(-15, { allowNegative: true })) // true
console.log(isItFifteen(-15)) // false (default behavior)
```

### Binary Number Support:

```javascript
console.log(isItFifteen('1111', { checkBinary: true })) // true (binary for 15)
console.log(isItFifteen('1111')) // false (default behavior)
```

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Write tests for your changes if applicable.
5. Open a pull request with a clear description of your changes.

## License

This project is licensed under the **MIT License**.
