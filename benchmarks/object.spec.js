'use strict'

import { Benchmark } from 'benchmark';
const suite = new Benchmark.Suite()

const arr = [{foo: 'y'}, {foo: 'z'}, {foo: 'x'}]

suite.add('', function() {

})

suite.on('cycle', function(event) {
	console.log(String(event.target))
})

suite.on('complete', function() {
	console.log(`Fastest is ${this.filter('fastest').map('name')}`)
})

suite.run()
