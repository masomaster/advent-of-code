/* Data for Day 5 */
const stack1 = ['Z', 'P', 'M', 'H', 'R'];
const stack2 = ['P', 'C', 'J', 'B'];
const stack3 = ['S', 'N', 'H', 'G', 'L', 'C', 'D'];
const stack4 = ['F', 'T', 'M', 'D', 'Q', 'S', 'R', 'L'];
const stack5 = ['F', 'S', 'P', 'Q', 'B', 'T', 'Z', 'M'];
const stack6 = ['T', 'F', 'S', 'Z', 'B', 'G'];
const stack7 = ['N', 'R', 'V'];
const stack8 = ['P', 'G', 'L', 'T', 'D', 'V', 'C', 'M'];
const stack9 = ['W', 'Q', 'N', 'J', 'F', 'M', 'L'];
const stacks = [[], stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9]


const INSTRUCTIONS = `move 7 from 3 to 9
move 5 from 8 to 9
move 3 from 9 to 5
move 6 from 9 to 2
move 9 from 9 to 3
move 3 from 7 to 3
move 8 from 2 to 3
move 9 from 3 to 1
move 11 from 3 to 8
move 5 from 6 to 9
move 1 from 6 to 3
move 1 from 2 to 7
move 1 from 4 to 8
move 1 from 3 to 9
move 4 from 4 to 3
move 6 from 8 to 3
move 2 from 8 to 2
move 4 from 9 to 3
move 3 from 2 to 5
move 2 from 5 to 4
move 5 from 3 to 4
move 11 from 1 to 4
move 1 from 7 to 6
move 1 from 3 to 5
move 2 from 1 to 9
move 1 from 1 to 4
move 7 from 5 to 8
move 21 from 4 to 6
move 6 from 6 to 2
move 6 from 8 to 9
move 5 from 8 to 5
move 2 from 2 to 7
move 4 from 3 to 7
move 1 from 2 to 6
move 1 from 2 to 5
move 2 from 2 to 7
move 4 from 3 to 7
move 1 from 4 to 6
move 9 from 5 to 3
move 7 from 3 to 4
move 7 from 7 to 3
move 7 from 4 to 1
move 8 from 3 to 5
move 1 from 3 to 5
move 3 from 8 to 2
move 2 from 2 to 9
move 13 from 9 to 4
move 5 from 5 to 3
move 4 from 7 to 6
move 1 from 7 to 4
move 2 from 4 to 2
move 3 from 3 to 4
move 2 from 5 to 2
move 6 from 1 to 7
move 1 from 2 to 8
move 1 from 3 to 8
move 1 from 1 to 6
move 1 from 3 to 4
move 1 from 2 to 6
move 24 from 6 to 1
move 3 from 2 to 3
move 3 from 3 to 5
move 2 from 8 to 6
move 2 from 5 to 4
move 3 from 5 to 1
move 7 from 4 to 8
move 3 from 8 to 9
move 2 from 9 to 5
move 2 from 6 to 3
move 1 from 9 to 8
move 5 from 7 to 5
move 2 from 3 to 1
move 1 from 7 to 1
move 7 from 4 to 7
move 2 from 4 to 8
move 6 from 8 to 6
move 3 from 6 to 9
move 10 from 5 to 1
move 7 from 7 to 1
move 1 from 4 to 9
move 1 from 6 to 3
move 2 from 9 to 7
move 1 from 4 to 2
move 1 from 9 to 5
move 1 from 8 to 5
move 39 from 1 to 8
move 1 from 2 to 5
move 2 from 6 to 9
move 3 from 9 to 5
move 3 from 1 to 6
move 1 from 7 to 2
move 1 from 3 to 2
move 2 from 6 to 2
move 3 from 2 to 3
move 1 from 6 to 2
move 1 from 1 to 8
move 3 from 1 to 2
move 3 from 2 to 4
move 2 from 4 to 5
move 2 from 3 to 8
move 8 from 5 to 2
move 8 from 8 to 2
move 15 from 2 to 7
move 1 from 1 to 5
move 25 from 8 to 7
move 2 from 2 to 4
move 2 from 4 to 3
move 1 from 8 to 4
move 2 from 4 to 6
move 1 from 2 to 1
move 26 from 7 to 2
move 15 from 2 to 1
move 7 from 8 to 9
move 10 from 1 to 6
move 10 from 7 to 2
move 1 from 8 to 1
move 5 from 9 to 8
move 1 from 8 to 9
move 2 from 6 to 9
move 3 from 7 to 1
move 1 from 7 to 1
move 5 from 9 to 2
move 1 from 3 to 1
move 9 from 6 to 3
move 1 from 6 to 1
move 4 from 2 to 4
move 3 from 4 to 8
move 1 from 4 to 1
move 9 from 3 to 1
move 1 from 7 to 6
move 9 from 2 to 5
move 14 from 1 to 6
move 1 from 3 to 8
move 5 from 2 to 6
move 8 from 1 to 8
move 6 from 6 to 8
move 14 from 6 to 7
move 1 from 1 to 7
move 10 from 5 to 4
move 11 from 8 to 5
move 15 from 7 to 1
move 4 from 5 to 6
move 4 from 8 to 9
move 6 from 5 to 3
move 1 from 6 to 9
move 1 from 1 to 6
move 1 from 5 to 8
move 2 from 6 to 2
move 6 from 1 to 5
move 1 from 5 to 8
move 2 from 5 to 4
move 9 from 2 to 9
move 13 from 9 to 8
move 1 from 2 to 1
move 1 from 4 to 8
move 3 from 3 to 1
move 2 from 4 to 5
move 2 from 1 to 5
move 1 from 9 to 3
move 17 from 8 to 1
move 3 from 3 to 2
move 4 from 5 to 1
move 2 from 2 to 4
move 1 from 6 to 1
move 1 from 2 to 8
move 4 from 4 to 6
move 1 from 5 to 9
move 5 from 6 to 8
move 1 from 5 to 4
move 1 from 5 to 6
move 3 from 8 to 6
move 8 from 4 to 5
move 32 from 1 to 7
move 11 from 7 to 6
move 8 from 5 to 3
move 3 from 8 to 7
move 6 from 3 to 9
move 4 from 3 to 8
move 5 from 8 to 2
move 1 from 8 to 5
move 11 from 6 to 3
move 1 from 5 to 2
move 2 from 8 to 6
move 12 from 7 to 8
move 2 from 6 to 2
move 2 from 6 to 4
move 5 from 2 to 5
move 8 from 7 to 2
move 2 from 7 to 1
move 2 from 7 to 6
move 5 from 5 to 4
move 5 from 4 to 7
move 5 from 8 to 2
move 2 from 9 to 7
move 5 from 8 to 4
move 2 from 7 to 3
move 2 from 9 to 3
move 3 from 7 to 9
move 1 from 1 to 8
move 2 from 6 to 1
move 2 from 9 to 8
move 1 from 7 to 8
move 1 from 2 to 5
move 1 from 7 to 9
move 7 from 4 to 3
move 3 from 3 to 6
move 5 from 8 to 6
move 3 from 9 to 5
move 16 from 3 to 1
move 2 from 9 to 1
move 7 from 1 to 8
move 1 from 1 to 2
move 5 from 8 to 2
move 12 from 1 to 4
move 1 from 3 to 5
move 1 from 2 to 9
move 1 from 9 to 4
move 4 from 6 to 5
move 5 from 6 to 1
move 1 from 6 to 5
move 1 from 1 to 4
move 1 from 4 to 7
move 1 from 3 to 7
move 9 from 4 to 6
move 2 from 7 to 8
move 1 from 3 to 4
move 2 from 8 to 9
move 4 from 8 to 4
move 4 from 2 to 8
move 2 from 9 to 7
move 2 from 7 to 8
move 10 from 2 to 4
move 1 from 2 to 1
move 5 from 4 to 7
move 1 from 1 to 3
move 3 from 8 to 7
move 6 from 7 to 2
move 3 from 2 to 7
move 1 from 6 to 7
move 5 from 5 to 8
move 4 from 1 to 3
move 4 from 3 to 1
move 8 from 4 to 2
move 1 from 3 to 2
move 2 from 7 to 2
move 2 from 6 to 3
move 4 from 7 to 2
move 4 from 5 to 7
move 14 from 2 to 7
move 3 from 2 to 1
move 3 from 8 to 2
move 1 from 5 to 7
move 6 from 2 to 4
move 2 from 2 to 7
move 2 from 3 to 6
move 6 from 8 to 2
move 4 from 6 to 4
move 2 from 6 to 9
move 4 from 4 to 2
move 2 from 4 to 8
move 10 from 7 to 2
move 18 from 2 to 6
move 2 from 2 to 6
move 2 from 9 to 2
move 2 from 8 to 5
move 1 from 2 to 9
move 1 from 2 to 9
move 1 from 5 to 7
move 1 from 2 to 6
move 2 from 9 to 2
move 6 from 7 to 3
move 7 from 6 to 8
move 5 from 7 to 2
move 1 from 7 to 4
move 1 from 5 to 7
move 4 from 8 to 7
move 5 from 2 to 3
move 1 from 7 to 5
move 2 from 2 to 8
move 9 from 4 to 3
move 13 from 6 to 8
move 10 from 3 to 1
move 1 from 5 to 2
move 3 from 6 to 8
move 5 from 1 to 2
move 1 from 1 to 8
move 2 from 4 to 3
move 17 from 8 to 6
move 5 from 6 to 3
move 3 from 1 to 2
move 9 from 6 to 5
move 2 from 6 to 8
move 5 from 5 to 9
move 3 from 9 to 8
move 3 from 1 to 3
move 3 from 7 to 5
move 6 from 5 to 8
move 7 from 2 to 4
move 1 from 6 to 3
move 1 from 1 to 5
move 4 from 4 to 5
move 2 from 2 to 9
move 3 from 1 to 3
move 4 from 5 to 8
move 1 from 4 to 5
move 6 from 8 to 7
move 1 from 5 to 2
move 4 from 9 to 2
move 2 from 5 to 9
move 2 from 1 to 8
move 2 from 4 to 9
move 6 from 7 to 5
move 3 from 5 to 2
move 3 from 2 to 5
move 10 from 8 to 3
move 2 from 8 to 5
move 3 from 2 to 5
move 6 from 5 to 1
move 4 from 5 to 6
move 1 from 7 to 5
move 23 from 3 to 7
move 2 from 5 to 9
move 2 from 1 to 5
move 2 from 6 to 3
move 6 from 3 to 1
move 1 from 1 to 7
move 4 from 3 to 1
move 1 from 8 to 5
move 2 from 9 to 2
move 3 from 3 to 8
move 2 from 6 to 8
move 12 from 1 to 3
move 1 from 9 to 7
move 3 from 5 to 9
move 9 from 3 to 8
move 1 from 1 to 7
move 1 from 9 to 4
move 3 from 3 to 6
move 3 from 2 to 1
move 3 from 8 to 6
move 1 from 4 to 2
move 1 from 2 to 9
move 1 from 2 to 7
move 20 from 7 to 5
move 3 from 7 to 3
move 3 from 1 to 3
move 5 from 8 to 1
move 5 from 1 to 5
move 4 from 5 to 2
move 3 from 2 to 6
move 3 from 8 to 7
move 1 from 2 to 6
move 2 from 8 to 6
move 2 from 7 to 5
move 2 from 3 to 6
move 12 from 5 to 1
move 6 from 5 to 7
move 12 from 6 to 8
move 4 from 9 to 3
move 4 from 5 to 8
move 3 from 1 to 5
move 4 from 7 to 4
move 3 from 5 to 9
move 7 from 1 to 6
move 1 from 1 to 3
move 6 from 7 to 6
move 1 from 1 to 3
move 10 from 3 to 6
move 10 from 6 to 2
move 2 from 9 to 5
move 4 from 6 to 5
move 9 from 6 to 1
move 16 from 8 to 7
move 3 from 8 to 7
move 1 from 8 to 1
move 7 from 2 to 1
move 1 from 5 to 9
move 1 from 6 to 1
move 2 from 2 to 1
move 3 from 1 to 4
move 1 from 6 to 8
move 7 from 4 to 1
move 1 from 8 to 2
move 22 from 1 to 8
move 18 from 7 to 9
move 6 from 5 to 2
move 2 from 2 to 7
move 2 from 1 to 5
move 4 from 7 to 6
move 1 from 5 to 6
move 2 from 8 to 2
move 3 from 2 to 6
move 1 from 5 to 6
move 15 from 9 to 6
move 6 from 9 to 5
move 1 from 9 to 8
move 1 from 2 to 9
move 5 from 5 to 9
move 9 from 8 to 6
move 3 from 2 to 7
move 12 from 8 to 9
move 1 from 7 to 5
move 1 from 5 to 7
move 3 from 7 to 1
move 17 from 6 to 3
move 1 from 2 to 6
move 2 from 1 to 4
move 16 from 6 to 4
move 7 from 4 to 6
move 1 from 5 to 7
move 8 from 4 to 5
move 9 from 9 to 8
move 16 from 3 to 7
move 1 from 1 to 5
move 3 from 5 to 1
move 5 from 6 to 2
move 3 from 1 to 7
move 3 from 6 to 7
move 3 from 9 to 3
move 5 from 8 to 5
move 11 from 5 to 7
move 2 from 3 to 7
move 1 from 2 to 1
move 1 from 3 to 6
move 17 from 7 to 9
move 1 from 3 to 2
move 3 from 4 to 6
move 1 from 1 to 2
move 1 from 6 to 4
move 14 from 7 to 6
move 15 from 9 to 6
move 4 from 8 to 7
move 1 from 4 to 7
move 7 from 9 to 5
move 5 from 2 to 9
move 7 from 5 to 1
move 3 from 1 to 7
move 29 from 6 to 4
move 1 from 2 to 4
move 18 from 4 to 2
move 3 from 1 to 4
move 1 from 1 to 7
move 18 from 2 to 4
move 3 from 6 to 5
move 15 from 4 to 1
move 1 from 5 to 1
move 1 from 5 to 4
move 9 from 4 to 1
move 5 from 1 to 3
move 9 from 1 to 5
move 2 from 4 to 3
move 5 from 5 to 6
move 3 from 7 to 9
move 7 from 7 to 5
move 6 from 4 to 6
move 2 from 3 to 7
move 6 from 5 to 8
move 2 from 8 to 4
move 1 from 8 to 9
move 9 from 6 to 2
move 3 from 9 to 3
move 1 from 2 to 1
move 6 from 7 to 4
move 2 from 2 to 8
move 3 from 9 to 5
move 5 from 4 to 8
move 1 from 6 to 9
move 1 from 3 to 1
move 1 from 3 to 4
move 1 from 6 to 5
move 1 from 9 to 3
move 10 from 8 to 7
move 3 from 9 to 2
move 7 from 2 to 4
move 6 from 5 to 7
move 4 from 5 to 8
move 7 from 3 to 2
move 3 from 7 to 1
move 9 from 1 to 5
move 5 from 7 to 9
move 7 from 1 to 4
move 11 from 4 to 2
move 4 from 8 to 3
move 5 from 4 to 7
move 4 from 4 to 1
move 1 from 3 to 6
move 12 from 7 to 4
move 2 from 1 to 8
move 5 from 9 to 7
move 7 from 5 to 6
move 1 from 1 to 4
move 1 from 9 to 8
move 1 from 4 to 7
move 1 from 8 to 9
move 5 from 7 to 9
move 2 from 7 to 5
move 2 from 6 to 3
move 5 from 2 to 7
move 1 from 7 to 8
move 1 from 1 to 6
move 3 from 5 to 1`

// Data manipulation
const INSTRUCTIONS_ARRAY = INSTRUCTIONS.split(/\r\n|\n\r|\n|\r/g).map(function(str) {
    // slice off first 5 characters
    let newStr = str.slice(5);
    // identify the whole number (could be multiple digits) by finding the space
    let stop = newStr.indexOf(" ")
    // convert "number" (string) to number and make an array
    let arr = [parseInt(newStr.slice(0, stop))];
    // slice off next characters, repeat.
    newStr = newStr.slice(stop+6)
    stop = newStr.indexOf(" ")
    arr.push(parseInt(newStr.slice(0, stop)))
    // repeat again, with modification, for final number
    newStr = newStr.slice(stop+3)
    arr.push(parseInt(newStr))
    // console.log(arr)
    str = arr;
    return arr;
})

/* Solution for Part 1 */
function processAllInstructions(allInstructionsArr) {
    allInstructionsArr.forEach(function(instr) {
        handleOneInstructionLine(instr);
    })
    // console.log('stack1: ', stacks[1])
    // console.log('stack2: ', stacks[2])
    // console.log('stack3: ', stacks[3])
    // console.log('stack4: ', stacks[4])
    // console.log('stack5: ', stacks[5])
    // console.log('stack6: ', stacks[6])
    // console.log('stack7: ', stacks[7])
    // console.log('stack8: ', stacks[8])
    // console.log('stack9: ', stacks[9])
}

function handleOneInstructionLine(instructionsArr) {
    let count = instructionsArr[0];
    while (count > 0) {
        moveOneCrate(instructionsArr[1], instructionsArr[2])
        count--;
    }
}

function moveOneCrate(fromStack, toStack) {
    const movingCrate = stacks[fromStack].pop()
    stacks[toStack].push(movingCrate)
}
// processAllInstructions(INSTRUCTIONS_ARRAY)

/* Solution for Part 2 */
function processAllInstructions_9001(allInstructionsArr) {
    allInstructionsArr.forEach(function(instr) {
        handleOneInstructionLine_9001(instr);
    })
    console.log('stack1: ', stacks[1])
    console.log('stack2: ', stacks[2])
    console.log('stack3: ', stacks[3])
    console.log('stack4: ', stacks[4])
    console.log('stack5: ', stacks[5])
    console.log('stack6: ', stacks[6])
    console.log('stack7: ', stacks[7])
    console.log('stack8: ', stacks[8])
    console.log('stack9: ', stacks[9])
}

function handleOneInstructionLine_9001(instructionsArr) {
    const count = instructionsArr[0];
    const fromCrate = stacks[instructionsArr[1]];
    const toCrate = stacks[instructionsArr[2]];
    stacks[instructionsArr[2]] = toCrate.concat(fromCrate.slice(fromCrate.length-count));
    stacks[instructionsArr[1]].splice(fromCrate.length-count)
}

processAllInstructions_9001(INSTRUCTIONS_ARRAY)