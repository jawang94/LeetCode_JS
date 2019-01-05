/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums === null) {
    return false;
  }

  var map = {};

  for (var i = 0; i < nums.length; i++) {
    var val = nums[i];
    if (map[val]) {
      return true;
    } else {
      map[val] = true;
    }
  }

  return false;
};
