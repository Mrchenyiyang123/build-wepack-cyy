const assert = require('assert');
const { indexOf } = require('lodash');


describe('webpack.base.js test case',() =>{
  const baseConfig = require('../../lib/webpack.base.js')


  // console.log(baseConfig, 'baseConfig');
  it('entry',()=>{
     assert.equal(
       baseConfig.entry.index,indexOf('build-webpack/test/smoke/template/src/index/index.js'),true
     );
     assert.equal(
       baseConfig.entry.search.indexOf(
         'build-webpack/test/smoke/template/src/search/index.js'
       ),
       true,
     );
  })
})