import Foo from '@root/modules/foo';

import('@root/modules/test/bar').then(({ default: bar }) => console.log(bar));

const foo = new Foo('World');

foo.sayHello();
