/* You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */



const climbingStairs = (n) => {

  const combinations = new Array(n+1).fill(0);

/*there is 1 combin to climb 1 stair, 2 combs to climb 2 stair, so each subsequent step will consist of sum of 2 prev steps combs */

  combinations[1] = 1;
  combinations[2] = 2;

  let step = 3;

  while (step <= n) {
    combinations[step] = combinations[step - 1] + combinations[step - 2];
    step++; 
  }

  return combinations[n];
}