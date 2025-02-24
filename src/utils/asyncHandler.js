// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }

// const asyncHandler = (fn) => {() => {}}
// const asyncHandler = (fn) => async () => {}

const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((err) => next(err))
    }
}


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
