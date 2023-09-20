//https://frontendmasters.com/courses/practical-algorithms/call-stack-walkthrough/

//callstack game
//write out all the stack and run through the process

// tracker = 0 //1 //2 //3 //0

// let callMe = function(arg){
//     //arg = undefined
//   tracker++

//   if(tracker === 3){
//     tracker = 0
//     return `loops! ${args}`
//   }

//   return callMe('anytime') return 'loops! anytime'
//   ~~~~~~~~~~~~~~~~
// }

// let callMe = function(arg){
//     //arg = anytime
//   tracker++

//   if(tracker === 3){
//     tracker = 0
//     return `loops! ${args}`
//   }

//   return callMe('anytime') return 'loops! anytime'
//   ~~~~~~~~~~~~~~~~
// }

// let callMe = function(arg){
//     //arg = anytime
//   tracker++

//   if(tracker === 3){
//     tracker = 0
//     return `loops! ${args}` return 'loops! anytime'
//   }

//   return callMe('anytime')
//   ~~~~~~~~~~~~~~~~
// }

let tracker = 0;

let callMe = function (arg) {
  tracker++;

  if (tracker === 3) {
    tracker = 0;
    //exit to callMe('anytime')
    //won't have infinite looop
    return `loops! ${args}`;
  }

  return callMe("anytime");
};

console.log(callMe());
