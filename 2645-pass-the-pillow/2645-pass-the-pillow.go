func passThePillow(n int, time int) int {
	isMinus := false
	pointer := 1
	modulo := 1
	for i := 1; i <= time; i++ {
		if modulo%n == 0 {
			isMinus = !isMinus
			modulo = modulo + 1
		}

		if isMinus {
			pointer--
		} else {
			pointer++
		}

		modulo++
	}

    return pointer
}