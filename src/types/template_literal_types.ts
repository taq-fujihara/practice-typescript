type Foo = 'FOobAr'

type FooUpper = Uppercase<Foo>
//   ^?

type FooLower = Lowercase<Foo>
//   ^?

type FooCapitalize = Capitalize<Foo>
//   ^?

type FooUncapitalize = Uncapitalize<Foo>
//   ^?

type FooManipulated = `Prefix:${Foo}`
//   ^?

type Prefix<T extends string> = `Prefix:${T}`
//   ^?
type FooA = Prefix<FooUpper>
//   ^?
type FooB = Prefix<FooLower>
//   ^?
type Bar = Prefix<'bar'>
//   ^?
