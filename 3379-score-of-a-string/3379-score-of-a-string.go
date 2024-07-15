func scoreOfString(s string) int {
    byteArr := []byte(s)
	sum := 0
	for i := 0; i < len(byteArr)-1; i++ {
		result := int(byteArr[i]) - int(byteArr[i+1])
		if result < 0 {
			result = -result
		}
		sum += result
	}

	return sum
}