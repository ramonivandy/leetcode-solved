func isPalindrome(x int) bool {
    
    temp := x
    reversed := 0
    
    for temp > 0 {
        reversed = reversed*10 + temp%10
        temp /= 10
    }

    return reversed == x
}