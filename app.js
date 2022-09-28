// https://www.omnicalculator.com/everyday-life/acceptance-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const acceptancerateRadio = document.getElementById('acceptancerateRadio');
const totalnumberofapplicantsRadio = document.getElementById('totalnumberofapplicantsRadio');
const numberofapplicantsacceptedRadio = document.getElementById('numberofapplicantsacceptedRadio');

let acceptancerate;
let totalnumberofapplicants = v1;
let numberofapplicantsaccepted = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

acceptancerateRadio.addEventListener('click', function() {
  variable1.textContent = 'Total number of applicants';
  variable2.textContent = 'Number of applicants accepted';
  totalnumberofapplicants = v1;
  numberofapplicantsaccepted = v2;
  result.textContent = '';
});

totalnumberofapplicantsRadio.addEventListener('click', function() {
  variable1.textContent = 'Acceptance rate';
  variable2.textContent = 'Number of applicants accepted';
  acceptancerate = v1;
  numberofapplicantsaccepted = v2;
  result.textContent = '';
});

numberofapplicantsacceptedRadio.addEventListener('click', function() {
  variable1.textContent = 'Acceptance rate';
  variable2.textContent = 'Total number of applicants';
  acceptancerate = v1;
  totalnumberofapplicants = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(acceptancerateRadio.checked)
    result.textContent = `Acceptance rate = ${computeacceptancerate().toFixed(2)}`;

  else if(totalnumberofapplicantsRadio.checked)
    result.textContent = `Total number of applicants = ${computetotalnumberofapplicants().toFixed(2)}`;

  else if(numberofapplicantsacceptedRadio.checked)
    result.textContent = `Number of applicants accepted = ${computenumberofapplicantsaccepted().toFixed(2)}`;
})

// calculation

function computeacceptancerate() {
  return (Number(numberofapplicantsaccepted.value) / Number(totalnumberofapplicants.value)) * 100;
}

function computetotalnumberofapplicants() {
  return Number(numberofapplicantsaccepted.value) / (Number(acceptancerate.value) / 100);
}

function computenumberofapplicantsaccepted() {
  return (Number(acceptancerate.value) / 100) * Number(totalnumberofapplicants.value);
}