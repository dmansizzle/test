const hello = "hello"

function test (string = 'World') {
    return `${hello} ${string}`
}

console.log(test())

console.log(test('cheese'))