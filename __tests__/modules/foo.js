import Foo from '@root/modules/foo';

describe('Foo', () => {
	describe('sayHello', () => {
		test('Returns string with given parameter', () => {
			// Arrange
			const value = 'Dirk';
			const foo = new Foo(value);

			// Act
			const result = foo.sayHello();

			// Assert
			expect(result).toBe('Hello Dirk');
		});

		test('Returns string with default value when no parameter is passed', () => {
			// Arrange
			const foo = new Foo();

			// Act
			const result = foo.sayHello();

			// Assert
			expect(result).toBe('Hello John Doe');
		});
	});
});
