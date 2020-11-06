class Foo {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		return `Hello ${this.name ?? 'John Doe'}`;
	}
}

export default Foo;
