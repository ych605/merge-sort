import { mergeSort } from '../index.js'
import { expect } from 'chai'

describe('mergeSort()', function () {

  it('should return an empty list if the input is an empty list', function () {
    expect(mergeSort([])).to.have.deep.ordered.members([])
  })

  it('should return a sorted list in ascending order', function () {
    expect(mergeSort([6, 4, 8, 9, 1, 2, 0, 7, 5, 3])).to.have.deep.ordered.members([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(mergeSort(['f', 'e', 'a', 'c', 'g', 'b', 'd'])).to.have.deep.ordered.members(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
  })

})
