package main

import (
	"fmt"
	"math"
)

var c, python, java, csharp, golang string

func add(x, y int) int {
	return x + y
}

// return multi results
func swap(x, y string) (string, string) {
	return y, x
}

func main() {

	// 短变量声明 := 只能使用在函数内部
	k := 3
	fmt.Printf(string(k))

	var i int = 100
	fmt.Printf(string(i))

	a, b := swap("hello", "world")
	fmt.Printf(a)
	fmt.Printf(b)

	fmt.Printf("Now you have %g problems. \n", math.Sqrt(7))
}

/*
 基本数据类型:
 bool
 string
 int int8 int16 int32 int64
 uint, uint8 uint16 uint32 uint64 uintptr
 // int, uint, uintptr在32位系统为32位宽, 在64位系统为64位宽

 byte // uint8的别名
 rune // int32的别名
 float32 float64
 complex64 complex 128
*/

/*
零值:
在没有明确初始化的变量声明会被赋予他们的零值
	数据类型为0
	布尔类型为false
	字符串类型为""(空字符串)
*/

/*
类型转换
表达式 T(v) 将值v转换为类型 T
i := 42
f := float64(i)
*/

/*
常量
const world = "世界"
常量不能使用 := 语法
*/

/*
循环语句, for循环, 只有这一种
 基本的 for 循环由三部分组成，它们用分号隔开：

    初始化语句：在第一次迭代前执行
    条件表达式：在每次迭代前求值
    后置语句：在每次迭代的结尾执行

初始化语句通常为一句短变量声明，该变量声明仅在 for 语句的作用域中可见。

一旦条件表达式的布尔值为 false，循环迭代就会终止。

注意：和 C、Java、JavaScript 之类的语言不同，Go 的 for 语句后面的三个构成部分外没有小括号，大括号 { } 则是必须的。

for i := 0; i < 10; i++ {
	fmt.Printf(string(i));
}
初始化和后置语句是可选的
*/

https://tour.go-zh.org/flowcontrol/2