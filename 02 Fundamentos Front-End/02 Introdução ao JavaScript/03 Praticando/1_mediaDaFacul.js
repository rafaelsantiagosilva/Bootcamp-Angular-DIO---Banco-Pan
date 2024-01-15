let firstGrade = 8;
let secondGrade = 8;
let thirdGrade = -765;

let gradesAverage = (firstGrade + secondGrade + thirdGrade) / 3;

if (gradesAverage > 7) {
     console.log("Passou de semestre!");
} else if (gradesAverage >= 5 && gradesAverage <= 7) {
     console.log("Está de recuperação!");
} else if (gradesAverage >= 0 && gradesAverage < 5) {
     console.log("Reprovado!");
} else {
     console.log("ERRO: Verifique os dados e tente novamente!");
}