function introduction(Aki) {
  return (`Hi, my name is ${Aki}.`);
}
function introductionWithLanguage(James, JavaScript) {
  return (`Hi, my name is ${James} and I am learning to program in ${JavaScript}.`);
}
function introductionWithLanguageOptional(James, firstName = JavaScript) {
  return (`Hi, my name is ${James} and I am learning to program in ${firstName}.`)
}
function introductionWithLanguageOptional(James, firstName = "JavaScript") {
  return (`Hi, my name is ${James} and I am learning to program in ${firstName}.`);
}