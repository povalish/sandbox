export type CounterResult = number;

export type CounterAction = {
  type: 'increase' | 'descrease';
  value: CounterResult;
};

export function counter(count: CounterResult, action: CounterAction): CounterResult {
  switch (action.type) {
    case 'increase':
      return count + action.value;

    case 'descrease':
      return count - action.value;

    default:
      throw new Error('[Reducer:counter] unknown action type.');
  }
}
