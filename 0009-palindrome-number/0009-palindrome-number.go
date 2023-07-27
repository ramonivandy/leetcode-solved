func isPalindrome(x int) bool {
    if x < 0 {
        return false
    }

    temp := x
    reversed := 0
    for temp > 0 {
        reversed = reversed*10 + temp%10
        temp /= 10
    }

    return reversed == x
}