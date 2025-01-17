import {
  basketWithNoQuantity,
  filteredBasketWithQuantityOnly,
} from '../__mocks__/basket.mock';
import { filterArray } from '../filterArray';

const cb = jest.fn();
const logSpy = jest.spyOn(console, 'log');

describe('filterArray', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should invoke provided function as many time as the length of an array', () => {
    const arr = [1, 2, 3];

    filterArray(arr, cb);

    expect(cb).toHaveBeenCalledTimes(arr.length);
  });

  it('should not invoke callback when an array is empty', () => {
    filterArray([], cb);

    expect(cb).not.toHaveBeenCalled();
    expect(logSpy).not.toHaveBeenCalled();
  });

  it('should filter an array using provided predicate', () => {
    const hasQuantity = (order) => order.qty > 0;

    const result = filterArray(basketWithNoQuantity, hasQuantity);

    expect(result).toEqual(filteredBasketWithQuantityOnly);
    expect(logSpy).toHaveBeenCalledTimes(basketWithNoQuantity.length)
  });
});
