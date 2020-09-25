const entities = {
	fund: {
		1: { id: 1, name: 'VCPT Ventures III' },
		2: { id: 2, name: 'Huron Oak Equity V' },
		3: { id: 3, name: 'Pacific Capital Partners I' },
	},
	company: {
		15: { id: 15, name: 'FidoFarm', fund_id: 2, exited: false },
		23: { id: 23, name: 'Accumentor', fund_id: 2, exited: true },
		52: { id: 52, name: 'Dronez', fund_id: 1, exited: true },
		63: { id: 63, name: 'CoffeeBuilders', fund_id: 3, exited: false },
	},
}


//  Prompt 1 -Return an array of fund objects in alphabetical order.

    function sortFundsAlphabetically(obj) {
        return Object.values(obj).sort(function(a, b) {
            let A = a.name.toLowerCase();
            let B = b.name.toLowerCase();
            return (A < B) ? -1 : (A > B) ? 1 : 0;
        }); 
    }

    sortFundsAlphabetically(entities["fund"])


// Prompt 2 -Return an array of companies that belong to fund 2.

    function belongToFundTwo(obj) {
        let newArr = []
        let arr = Object.values(obj)
        for (let i=0; i < arr.length; i++){
            if(arr[i].fund_id === 2){
            newArr.push(arr[i])
            }       
        }
        return newArr
    }

    belongToFundTwo(entities["company"])


// Prompt 3 -Return an array of fund names with an exited company.

    function fundsWithExitedCompany(){
        Object.values(entities["fund"])

        let fundIds = []
        let arrOfCompanies = Object.values(entities["company"])
        for (let i=0; i < arrOfCompanies.length; i++){
            if(arrOfCompanies[i].exited === true){
            fundIds.push(arrOfCompanies[i].fund_id)
            }       
        }

        let fundNames = []
        let arrOfFunds = Object.values(entities["fund"])
        for (let i=0; i < arrOfFunds.length; i++){
            if(fundIds.includes(arrOfFunds[i].id)){
            fundNames.push(arrOfFunds[i].name)
            }       
        }

        return fundNames
    }

