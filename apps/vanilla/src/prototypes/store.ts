/* eslint-disable prettier/prettier */

interface IBaseCounter {
  value: number;
  increase: (num: number) => number;
  decrease: (num: number) => number;
}

const BaseCounter: IBaseCounter = {
  value: 0,
  increase: function (num: number) { return this.value + num; },
  decrease: function (num: number) { return this.value - num; },
};

const Counter: IBaseCounter = Object.create(BaseCounter);
console.log(Object.getPrototypeOf(Counter) === BaseCounter);  // true

/** ResetableCounter */

interface IResetableCounter extends IBaseCounter {
  reset: () => void;
}

const ResetableCounter: IResetableCounter = {
  reset: function () {
    this.value = 0;
  },
  value: 0,
  increase: function (num: number): number {
    return this.value + num;
  },
  decrease: function (num: number): number {
    return this.value - num;
  }
}

const AdvancedCounter: IResetableCounter = Object.create(BaseCounter);
Object.setPrototypeOf(AdvancedCounter, ResetableCounter); // override prototype
