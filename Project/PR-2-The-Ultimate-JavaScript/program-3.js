let P = 600000,T = 12, R;

if (P >= 500000 && T >= 5) {
    R = .095;
} else if (P >= 300000 && T >= 5) {
    R = .075;
} else if (P >= 150000 && T >= 3) {
    R = .045;
}
else
{
    R = 2.5;
}


console.log(`Invested Amount Is ${P}.`);
console.log(`For ${T} Years.`);
console.log(`At ${R}% Of Rate Of Intresrt.`);