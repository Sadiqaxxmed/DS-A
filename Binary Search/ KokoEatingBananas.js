/***********************************************************************************************

~ KOKO EATING BANANAS ~

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23

Constraints:

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109

***********************************************************************************************/


var minEatingSpeed = function(piles, h) {
    let min = 1; // Minimum possible speed to start
    let max = Math.max(...piles); // Maximum possible speed initially set as the maximum number of bananas in a pile
    let k = 0; // Initializing the variable to store the minimum eating speed
    
    while (min <= max) { // Binary search algorithm for finding the minimum eating speed
        let mid = Math.floor((min + max) / 2); // Calculate the middle speed
        
        let hour = 0; // Initializing the total hours taken to eat all bananas at this speed
        for (let p of piles) {
            hour += Math.ceil(p / mid); // Calculate the total hours needed for each pile at this speed
        }
        
        if (hour <= h) { // If total hours are less than or equal to the available hours
            max = mid - 1; // Update the maximum speed to mid - 1 (to check for a smaller speed)
            k = mid; // Store the current speed as a potential solution
        } else {
            min = mid + 1; // Update the minimum speed to mid + 1 (to check for a faster speed)
        }
    }
    return k; // Return the minimum speed found
};