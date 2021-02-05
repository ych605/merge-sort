'use strict'
import sort from 'fast-sort';
import { mergeSort } from '../index'
import { Benchmark } from 'benchmark';
const suite = new Benchmark.Suite()

const arr = [1, 4, 2, -10, 4, 7, 8, 9, 6, 5, 2]

suite.add('fast-sort', function() {
  sort(arr).asc();
})

suite.add('this package', function() {
  mergeSort(arr)
})

suite.on('cycle', function(event) {
	console.log(String(event.target))
})

suite.on('complete', function() {
	console.log(`Fastest is ${this.filter('fastest').map('name')}`)
})

suite.run()
