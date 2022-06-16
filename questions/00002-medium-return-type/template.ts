// 1. T 的类型约束为 函数，形参和返回值为any
// 2. 若 T 满足形参any，且推导(infer)存在返回值 R 那么返回 R的类型，否则返回never
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never
