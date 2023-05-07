
// Given an array (arr) as an argument complete the function countSmileys that should return the total number 
// of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

const countSmileys = (arr) => {
    if(arr.length === 0) return 0

    let smileyCount = 0
    let counter = 0

    for(let el of arr){
        if(el.length === 3){
            if(el[0] === ":" || el[0] === ';') counter++
            if(el[1] === "-" || el[1] === "~") counter++
            if(el[2] === ")" || el[2] === "D") counter++

            if(counter === 3){
                smileyCount++
            }
            counter = 0
        }else{
            if(el[0] === ":" || el[0] === ';') counter++
            if(el[1] === ")" || el[1] === "D") counter++

            if(counter === 2){
                smileyCount++
            }
            counter = 0
        }        
    }

    return smileyCount
}

countSmileys([":-)" , ";~D" , ":-D" , ":_D"]);

//Solution 2

const countSmileys = (arr) => {
    if(arr.length === 0) return 0
    
    let count = 0
    const validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];

    for(let el of arr){
        if(validSmileys.includes(el)){
            count++
        }
    }

    return count
}