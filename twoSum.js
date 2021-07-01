
            //Solution begins on line 35 //
            
            /*
            Problem:
            Given an array of integers nums and an integer target, 
            return indices (aka a list of numbers) 
            of the two numbers such that they add up to target.

            You may assume that each input would have exactly one solution, 
            and you may not use the same element twice.
            You can return the answer in any order.
            
            Thoughts:
            This tells me that we have an array of integers,
            and if two of the elements in our set will equal our target value 
            we need to return the indexes matching the number.
            
            Ex 1: 
            Input: nums = [2 ,7,11,15] , target = 9
            Output: [0,1]
            Output: Because nums[0] + nums[1] == 9, we return [0,1]. */

            /*
            psuedo-code : Brute Force
            Input : [2,7,11,15]
            Target : Any Num 
            Output: 1nums + 2nums = target
            Process: through looping in a forLoop to repeat the array
            
            Solution: if arr[index1] + arr[index2] = target
            return [index1 , index2]
            */

           var twoSum = function(nums, target) {
                if(nums.length <=1) return null;
                    for(let i = 0; i < nums.length; i++){
                        for(let j = i+1; j < nums.length; j++){
                            if(nums[i] + nums[j] === target){
                                return [i,j]
                        }
                    }
                }
            }