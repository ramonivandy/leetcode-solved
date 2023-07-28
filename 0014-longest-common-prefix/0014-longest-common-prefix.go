func longestCommonPrefix(strs []string) string {
    // do array sort
    sort.Strings(strs)

    // array already sorted, so take the first and last array
    arrFirst := strs[0]
    arrLast := strs[len(strs) - 1]
    // pointer
    index := 0
    // do loop when pointer still not archive arrFirst && arrLast length
    for index < len(arrFirst) && index < len(arrLast) {
        // if arrFirst character is not same as arrLast character, break the loop
        if arrFirst[index] != arrLast[index] {
            break
        }
        // if arrFirst character same with arrLast character, add more pointer
        index++
    }
    
    // do slice arrFirst string from index 0 to pointer
    return string(arrFirst[:index])
}