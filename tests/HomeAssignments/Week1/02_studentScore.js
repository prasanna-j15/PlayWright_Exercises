/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

let mark = 33;
let result = calculateGrade(mark);
console.log(result);

function calculateGrade(mark){
    switch (true){
        case mark >= 90 :
            return "Grade is A+";
        case mark >= 80 :
            return "Grade is A";
        case mark >= 70 :
            return "Grade is B+";
        case mark >= 60 :
            return "Grade is B";
        case mark >= 50 :
            return "Grade is C+";
        case mark >= 40 :
            return "Grade is C";
        default :
        return "Grade is F"
    }
}