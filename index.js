// Code your solution in this file!
function logDriverNames(arr){
  arr.forEach(e => console.log(e.name))
}

function logDriversByHometown(arr, town){
  arr.forEach(function (e){
    if (e.hometown === town){
      console.log(e.name)
    }
  })
}

function driversByRevenue(arr){
  newArr = [...arr]
  newArr.sort(function(a,b) {return (a.revenue) - (b.revenue)})
  return newArr
}

function driversByName(arr){
  newArr = [...arr]
  newArr.sort(function (a,b){
    if (a.name < b.name) {return -1}
    if (a.name > b.name) {return 1}
    else{return 0}
  })
  return newArr
}

function totalRevenue(arr){
  newArr = [...arr]
  return newArr.reduce(function (accumulator, currentValue){
     return accumulator + currentValue.revenue
  }, 0)
}

function averageRevenue(arr){
  return totalRevenue(arr)/arr.length

}
