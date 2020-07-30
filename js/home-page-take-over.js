// 1002 Shore Ex
// 1011 Dining
// 1012 Beverage
// 1021 Spa & Fitness
// 1032 Onboard Activities
// 1051 Internet

function hpto(props){

    function createLargeTile(){

    }

    function createSmallTile(){

    }

    function readDataFromCatalog(){

    }

    function readDateFromOrderHistory(){

    }

    function getAndGenerateSailingData(){
        //get sailing data from dom elements 
    }

    function observerFunction(cb){

    }

    function main(){

        //central logic goes here

    } 

    main();
    observerFunction(main);

}   

htpo({
    ships: [
        'NV', 'RD'
    ],
    sailingDates: [
        {   
            start: 'Jan 01 2021',
            end: 'Mar 17 2021'
        },
        {
            start: 'Mar 21 2021',
            end: 'Jul 18 2021',
        }
    ],
    orderSchemes:[
        {
            category: 'shoreEx',
            order: 1,
            rank: 1,
        },
        {
            category: 'shoreEx',
            order : 2,
            rank: 2,
        },
        {
            category: 'beverage',
            order: 3,
            rank: 3,
        },
        {
            category: 'beverage',
            order: 4,
            rank: 4,
        },
        {
            category: "internet",
            order: 5,
            rank: 5,
        },
        {
            category: "internet",
            order: 6,
            rank: 6,
        }
    ]
});
