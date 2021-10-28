let list = [
    {country: 'Korea', city: 'Seoul', population:  22394},
    {country: 'Japan', city: 'Tokyo', population: 39105},
    {country: 'Philippines', city: 'Manila', population:  23971},
    {country: 'Indonesia', city: 'Jakarta', population: 35362},
    {country: 'Mexico', city: 'Mexico-City', population:  21505},
    {country: 'Brazil', city: 'Saт-Paulo', population:  22495},
    {country: 'China', city: 'Shanghai', population:  22118},
    {country: 'India', city: 'Delhi', population:  31870},
]

function sort(arr, field, length) {
    arr.sort(sortByPopulation(field));
    return arr.slice(0, length)
    function sortByPopulation(field) {
        return function(cityOne, cityTwo) { 
            let value = 0;
            if (cityOne[field] > cityTwo[field]){
                value = 1
            } else if (cityOne[field] < cityTwo[field]){
                value = - 1
            } else if (cityOne[field] == cityTwo[field]){
                value = 0
            }
            return value * -1
        }
    }
}

console.log(sort(list, 'population', 3));