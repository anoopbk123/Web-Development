const rectangleCalculations = require('./custom-modules/rectangle')
const triangleMeasurements = (l, b)=>{
    console.log('perimeter', rectangleCalculations.perimeter(l,b))
    console.log('area', rectangleCalculations.area(l,b))
}
triangleMeasurements(2, 3)