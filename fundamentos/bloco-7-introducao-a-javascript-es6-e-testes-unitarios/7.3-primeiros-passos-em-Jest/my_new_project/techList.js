

const techList = (arr, name) =>{

  if(arr.length === 0 ){
    return "Vazio!"
  } else {
  sortedArray = arr.sort()
  techs = [];
  
  for(index in sortedArray){
    techs.push({name: name, tech: arr[index]})
  }
  return techs
  }
  }










module.exports = techList;