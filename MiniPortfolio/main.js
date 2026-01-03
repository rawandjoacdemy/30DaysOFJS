const roles =[
  [ 1 ,'Content Creator'],
  [ 2 ,'Instructor'] , 
  [ 3 ,'Motivational Speaker'],
  [ 4 ,'Programmer'],
  [ 5 ,'Educator'], 
  [ 6 ,'Motivator']];
const technologies = [
  ['Redux','purple']
, ['Node', 'green']
, ['MongoDB', 'green']
, ['Pandas', 'darkblue']
, ['Python', 'darkblue']
, ['Numpy', 'bluedark']
, ['JavaScript', 'yellow']
, ['HTML', 'orange']
, ['React','blue']];


const header = document.querySelector('.header-content');
const techs = document.querySelector('.techs');
const icons = document.querySelector('.icons');


function asyncOperation(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, 2000);
  });
}

async function Roles() {
  for (let i = 0; i < roles.length; i++) {
    await asyncOperation(roles[i][1]);
    icons.innerHTML = roles[i][0];
    header.innerHTML = roles[i][1];
  }
  Roles();
}

Roles();

async function Techs(){
    for(let i = 0; i < technologies.length; i++){
        await asyncOperation(technologies[i])
        techs.innerHTML = technologies[i][0];
        techs.style.color = technologies[i][1];
    }
    Techs();
}

Techs();



