func isValid(s string) bool {
    if len(s) < 2 {
        return false
    }

    var temp []string
    for idx, val := range s {
        if string(val) == "(" {
            temp = append(temp, ")")
        } else if string(val) == "{" {
            temp = append(temp, "}")
        } else if string(val) == "[" {
            temp = append(temp, "]")
        } else if len(temp) > 0 && string(s[idx]) == temp[len(temp) - 1] {
            temp = temp[:len(temp)-1]
        } else {
            return false
        }
    }

    if(len(temp) > 0){
        return false
    }

    return true
}