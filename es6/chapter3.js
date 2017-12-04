// An Extremly Simple Anchor & Spade Game

// returns a random integer in the range[m,n] (inclusive)
// Helper Function

function rand(m,n){
    return m + Math.floor((n-m+1) * Math.random());
}

// randomly returns a string representing one of the six
// Helper Function

function randFace(){
    return ["crown","anchor","heart","spade","club","diamond"] [rand(0,5)];
}

let funds = 50;
let round = 0;

while(funds >= 1 && funds < 100){
    round++;
    console.log(`round ${round}`);
    console.log(`\tstarting funds : ${funds}p`);

    // Place bets
    let bets = {crown:0,anchor:0,heart:0,spade:0,club:0,diamond:0};
    let totalBet = rand(1,funds);
    if(totalBet === 7){
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        let remaining = totalBet;
        do {
            let bet = rand(1,remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while(remaining > 0)
    }

    funds = funds - totalBet;
    console.log('\tbets ' + Object.keys(bets).map(face => `${face} : ${bets[face]} pence`).join(', ') + `(total : ${totalBet} pence`);
    
    // Roll Dice
    const hand = [];
    for(let roll=0;roll<3;roll++){
        hand.push(randFace())
    }
    console.log(`\thand: ${hand.join(', ')}`)

    // Collect Winings
    let winings = 0;
    for(let die=0;die<hand.length;die++){
        let face = hand[die]
        if(bets[face] > 0)
            winings = winings + bets[face];
    }

    funds = funds + winings;
    console.log(`\twinings : ${winings}`);
}

console.log(`\tending funds : ${funds}`)

// Some More Notes

/*

Control Flow :-
1. Conditional Based
    1. if ...
    2. if ... else ...
    3. switch
2. Loop Based
    1. while 
    2. do ... while
    3. for(initialization;condition;termination flow)
    4. for ... in loop [ for objects]
    5. for ... of loop [ for arrays or any iterable]
3. Flow Changer Statements
    1. break
    2. continue
    3. return
    4. throw

// Using Descending Indexes When Modifying Lists In-place
*/