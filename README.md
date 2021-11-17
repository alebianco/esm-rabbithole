# ESM Rabbithole

Digging to figure out the interoperability between ESM and CJS modules.

## Scenario

The project you're working on (**awesome**) is a Typescript project for Node that compiles as a modern ESM module.

A dependency of the project you have no control over (**foo**) is a Typescript (yay!) project that compiles to CJS (boo!).

Your task, should you choose to accept it, is to make them work nicely together.

### Foo - the dependency

- Uses Typescript to compile as a CJS module
- Has a single _default_ export from his only source file
- Generates types and source maps

Use `npm run build` to compile changes

### Awesome - the project

- Uses Typescript to compile as a ESM module
- Has **foo** as a dependency
- Imports **foo**'s default export and expects it to be a string

Use `npm test` to check if everything works as expected.