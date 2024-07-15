func climbStairs(n int) int {
    sum := 0
    current := 1
    prev := 0

    for i := 0; i < n; i++{
        sum = prev + current
        prev = current
        current = sum
    }

    return current
   
}