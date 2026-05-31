interface IMemoryCache<T> {
  data: Record<string, T>;
  set: (key: string, value: T) => T;
  get: (key: string) => T | null;
}

function MemoryCacheImpl<T>(this: IMemoryCache<T>) {
  this.data = {};
}

MemoryCacheImpl.prototype.set = function <T>(this: IMemoryCache<T>, key: string, value: T): T {
  this.data[key] = value;
  return value;
};

MemoryCacheImpl.prototype.get = function <T>(this: IMemoryCache<T>, key: string): T | null {
  return this.data[key] ?? null;
};

export const MemoryCache = MemoryCacheImpl as unknown as {
  new <T>(): IMemoryCache<T>;
};

const userCache = new MemoryCache<string>();
userCache.set('qwert-1', 'Nikita');
userCache.set('qwert-1-trewq', 'Nikita Clone');

console.log(userCache instanceof MemoryCacheImpl); // true

/**
 * Polyfill for `new` operator
 */

function NEW(Constructor: Function, ...args: any) {
  // через prototype могут быть заданы методы
  const instance = Object.create(Constructor.prototype);
  // вызов функции-конструктора с контекстом и аргументами
  Constructor.apply(instance, args);
  return instance;
}

function User(name: string) {
  this.name = name;
}

User.prototype.say = function () {
  console.log(this.name);
};

const user1 = new User('Nikita');
user1.say();

const user2 = NEW(User, 'Nikita-CLONE');
user2.say();
