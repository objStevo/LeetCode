export const twoSum = (nums, target) => {
  const hashMap = {};
  const targetIndexes = [];
  nums.forEach((num, i) => {
    if (hashMap[(target - num).toString()] !== undefined)
      targetIndexes.push(hashMap[(target - num).toString()], i);

    hashMap[num.toString()] = i;
  });
  return targetIndexes;
};


export const twoSumFast = (nums, target) => {
    const hashMap = {};
    let i = 0;
    
    while(hashMap[(target - nums[i]).toString()] === undefined){
        hashMap[nums[i].toString()] = i;
        i++;
    }
    return [hashMap[(target - nums[i]).toString()], i];
};