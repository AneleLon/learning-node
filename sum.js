
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
console.log(argv)
//const nums = process.argv.slice(2).map((n)=>Number(n))
//const sum = nums.reduce((acc,cur)=>acc + cur, 0)
//console.log(sum)


