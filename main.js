var latter = prompt('Enter a latter');

latter = latter.toLowerCase();
// switch (latter) {
//   case 'a' :
//     console.log("Vowel")
//     break;
//     case 'e' :
//     console.log("Vowel")
//     break;
//     case 'i':
//     console.log("Vowel")
//     break;
//     case 'o':
//     console.log("Vowel")
//     break;
//     case 'u':
//     console.log("Vowel")
//     break;
//     default :
//     console.log('Consonant')
// }

switch(latter){
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  console.log('Vowel');
  break;
  default :
  console.log('Consonant')
}