const topTenEconomicBowlers = require("./topTenEconomicBowlers");


function topTenEconomicBowlersEveryYear(matches,deliveries){
    const result={};
    for( let match of matches){
        const season=match.season;
        if(result[season]==undefined){
            result[season]=topTenEconomicBowlers(matches,deliveries,season);
        }
    }
    return result;
}

module.exports=topTenEconomicBowlersEveryYear;