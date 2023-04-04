//#student-start
const data = require('../assets/motorvoertuigen.json');
const fs = require('fs');
const path = require

let r = [];

// "ID": 0,
//     "ClassOfVehicleAge": "10000  ",
//     "Periods": "2000JJ00",
//     "TotalRoadVehicles_1": " 7640776",
//     "PassengerCar_2": " 6343164",
//     "TotalCommercialVehicles_3": "  883627",
//     "TotalCommercialMotorVehicles_4": "  883627",
//     "DeliveryVan_5": "  696135",
//     "Lorry_6": "   83153",
//     "RoadTractor_7": "   56759",
//     "SpecialPurposeVehicle_8": "   36374",
//     "Bus_9": "   11206",
//     "TotalTrailersAndSemiTrailers_10": "",
//     "Trailer_11": "",
//     "SemiTrailer_12": "",
//     "Motorcycle_13": "  413985"
// },

let getLeeftijd = (key) => {

    let leeftijden = {
        '10000': 'totaal',
        'A028285': '<1 jr',
        '51200': '1 - 2 jaar',
        '51400': '3 - 4 jaar',
        '51500': '5 - 6 jaar',
        '51700': '7 - 8 jaar',
        'A028286': '9 - 11 jaar',
        '80007': '12 - 14 jaar',
        '70400': '15 - 19 jaar',
        '70500': '20 - 24 jaar',
        '20700': '25 jaar of ouder'
    };

    let leeftijd = leeftijden[key.trim()];
    if (!leeftijd) {
        throw new Error('key not found: ' + key);
    }

    return leeftijd;
}

for (let i = 0; i <= 230; i++) {

    let el = data.value[i];

    let result = {
        jaar: el.Periods.split('JJ')[0],
        alleVoertuigen: el.TotalRoadVehicles_1,
        leeftijd: getLeeftijd(el.ClassOfVehicleAge)
    }

    // data.value[i].jaar = data.value[i].Periods.split('JJ')[0];
    r.push(result);
}

fs.writeFileSync('opdracht-2/motorvoertuigen.json', JSON.stringify(r));

//#student-end
//repl voor data conversie - verder geen opdracht


