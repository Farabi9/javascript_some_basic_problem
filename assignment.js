function anaToVori(ana){
    let vori = 0;
    vori = ana / 16;
    return vori;
}

const getVori = anaToVori(65)
// console.log(getVori)




function pandaCost(singara, somocha, jilapi){
    const singaraPrice = 7;
    const somochaPrice = 10;
    const jilapiPrice = 15;
       const singaraTotal = singaraPrice * singara;
       const somochaPriceTotal = somochaPrice * somocha;
       const jilapiTotalProce = jilapiPrice*jilapi;
       
       const totalPrice = singaraTotal + somochaPriceTotal + jilapiTotalProce
      return totalPrice;

  
}

const total = pandaCost(50, 60, 5)
// console.log(total)


function picnicBudget(person){
    const for1st100 = 5000;
    const for2nd200 = 4000;
    const for3rdAll = 3000;
    

    if(person <= 100){
        const first100PeoplePrice = person * for1st100
        return first100PeoplePrice
    }
    else if(person <= 200){
        const for1st = 100 * for1st100;
        const restPerson = person - 100;
        const for2nd = for2nd200 * restPerson;
        const sencondTotal = for2nd + for1st;
        return sencondTotal;
    }
    else if(person > 200){
        const secondTotal = 900000;
        const agRestPerson = person - 200;
        const for3rd = for3rdAll * agRestPerson;
        const total = for3rd + secondTotal;
        return total
    }

}

const totalBudget = picnicBudget(205)
// console.log(totalBudget)



const names = ['farabi', 'rifat', 'kamrul', 'hasan', 'ami', 'tmi'];

function oddFriend(names){
    let friend = []
    for(const name of names){
        if(name.length %2 != 0){
          friend.push(name)
          return friend
        }
        
    }
    
    
}
const getOddFriend = oddFriend(names)
console.log(getOddFriend)