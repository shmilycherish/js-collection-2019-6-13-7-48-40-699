'use strict';

function grouping_count(collection) {
  return collection.reduce((result, next) => {
    if(next in result) {
      result[next] ++;
    } else {
      result[next] = 1
    }
    return result;
  }, {})
}

module.exports = grouping_count;
