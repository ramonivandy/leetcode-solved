func getConcatenation(nums []int) []int {
    nums_return := []int{}
    idx := 0
    for i := 0; i < (len(nums) * 2); i++ {
        if i == len(nums){
            idx = 0
        }

        nums_return = append(nums_return, nums[idx])
        idx++
    }

    return nums_return
}