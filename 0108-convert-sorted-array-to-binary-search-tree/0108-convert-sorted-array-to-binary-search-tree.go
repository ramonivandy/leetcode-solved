/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedArrayToBST(nums []int) *TreeNode {
    return recursive(nums, 0, (len(nums) - 1))
}

func recursive(nums []int, start int, end int) *TreeNode {
    if start > end {
        return nil
    }

    mid := start + (end - start) / 2

    root := &TreeNode{
        Val: nums[mid],
    }

    root.Left = recursive(nums, start, mid - 1)
    root.Right = recursive(nums, mid + 1, end)

    return root
}