Array.prototype.chunk = function <T>(this: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(this.length / size) }, (_, i) => this.slice(i * size, i * size + size));
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];
array.chunk(2);
