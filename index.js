// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
     return drivers.slice(0,2)      
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]


function createFareMultiplier(integer) {
     return function fareMultiplier (multiple) {
       return integer * multiple
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

 function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
 }