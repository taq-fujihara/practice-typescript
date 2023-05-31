const User = {
  name: 'John',
  age: 30,
} as const

function acceptJohn(name: 'John') {
  //                ^?
  return name
}

acceptJohn('John')
acceptJohn(User.name) // NG if User is not `as const`
