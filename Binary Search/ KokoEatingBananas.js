
var minEatingSpeed = function (piles, h) {
    let min = 1
    let max = Math.max(...piles)
    let k = 0
    // console.log(max)
    while (min <= max) {
        //piles=[3,6,7,11]
        //[1,2,3,4,5,6,7,8,9,10,11]
        //min  mid     max
        let mid = Math.floor((min + max) / 2)
        let hour = 0
        for (let p of piles) {
            hour += Math.ceil(p / mid)
        }
        if (hour <= h) {
            max = mid - 1
            k = mid
        }
        else {
            min = mid + 1
        }

    }
    return k


};


// piles = [3,6,7,11], h = 8
