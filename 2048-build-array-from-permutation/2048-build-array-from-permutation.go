func buildArray(nums []int) []int {
    returnArr := []int{}

    for i := 0; i < len(nums); i++ {
        returnArr = append(returnArr, nums[nums[i]])
    }

    return returnArr
}