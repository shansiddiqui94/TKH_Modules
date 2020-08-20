//Assignment2 letter Grade Method 1

function varGrade(marks) {
    if (marks > 95) {
        console.log("A+")
    } else if (marks > 88 && marks <= 90) {
        console.log("A")
    } else if (marks > 84 && marks <= 88) {
        console.log("B+")
    } else if (marks > 76 && marks <= 84) {
        console.log("C+")
    } else if (marks > 67 && marks <= 70) {
        console.log("D+")
    } else if (marks > 64 && marks <= 67) {
        console.log("D")
    } else if (marks <= 64) {
        console.log("F")
    }
}
// varGrade(89)


// Letter Grade Method 2
// var marks = 87;

switch (true) {
    case marks > 95:
        console.log("A+");
        break;
    case marks > 88 && marks <= 90:
        console.log("A");
        break;
    case marks > 84 && marks <= 88:
        console.log("B+");
        break;
    case marks > 76 && marks <= 84:
        console.log("C+");
        break;
    case marks > 70 && marks <= 76:
        console.log("C");
        break;
    case marks > 67 && marks <= 70:
        console.log("D+");
        break;
    case marks > 64 && marks <= 67:
        console.log("D");
        break;
    case marks <= 64:
        console.log("F");
        break;
}