func twoSum(nums []int, target int) []int {
    
    for i := 0; i < len(nums); i++ {
        for j := 0; j < len(nums); j++ {
            if nums[i] + nums[j] == target {
                if i != j {
                    return []int{i, j}
                }
            }
        }
    }

    return []int{}
}