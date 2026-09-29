const name1 = "  sara amrani  ";
const birthYear1 = 2005;
const name2 = "OMAR ALAOUI";
const birthYear2 = 2003;
const name3 = "Nadia Idrissi";
const birthYear3 = 2004;


//etape 1 

console.log("=== Student ID Badge Formatter ===");
console.log(name1+' '+birthYear1+' '+' | '+ name2+' '+ birthYear2+' | '+name3+' '+birthYear3);

//etape 2

function cleanName(name){
 
    return name.trim().toLowerCase()

}
console.log(`Cleaned name 1: ${cleanName(name1)}`);
console.log(`Cleaned name 1: ${cleanName(name2)}`);
console.log(`Cleaned name 1: ${cleanName(name3)}`);

//step 3 

function capitalizeName(name){

  let words = name.split(" ");

    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    words[1] = words[1][0].toUpperCase() + words[1].slice(1);

    return words.join(" ");

}
console.log(`Capitalized name 1: ${capitalizeName(cleanName(name1))}`);
console.log(`Capitalized name 2: ${capitalizeName(cleanName(name2))}`);
console.log(`Capitalized name 3: ${capitalizeName(cleanName(name3))}`);

//step 4

function getInitials(name){
  let word = name.split(" ");

    word [0] = word[0][0];
    word [1] = word[1][0];
     return word.join("").toUpperCase();
}
console.log(`Initials 1: ${getInitials(cleanName(name1))}`);
console.log(`Initials 2: ${getInitials(cleanName(name2))}`);
console.log(`Initials 3: ${getInitials(cleanName(name3))}`);

  //step 5

function buildBadgeCode(initials, birthYear) {
  birthYear = String(birthYear).slice(-2);

  return `YC-${initials}-${birthYear}`;
}

console.log(`Badge code 1: ${buildBadgeCode(getInitials(cleanName(name1)), birthYear1)}`);
console.log(`Badge code 2: ${buildBadgeCode(getInitials(cleanName(name2)), birthYear2)}`);
console.log(`Badge code 3: ${buildBadgeCode(getInitials(cleanName(name3)), birthYear3)}`);


//step 6

function generateBadge(rawName, birthYear){

rawName = name

return `${rawName} - Badge: ${birthYear}`;
}
console.log(`${name1} - Badge: ${buildBadgeCode(getInitials(cleanName(name1)), birthYear1)}`);
console.log(`${name2} - Badge: ${buildBadgeCode(getInitials(cleanName(name1)), birthYear2)}`);
console.log(`${name3} - Badge: ${buildBadgeCode(getInitials(cleanName(name1)), birthYear3)}`);