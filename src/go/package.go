/*
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
*/

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




package main

import "fmt"

func main() {
	sum := 1
	for ; sum < 1000; {
		sum += sum
	}

	fmt.Printf(string(sum));
}

*/


/*
go中的while, 等同于for去掉分号

for sum < 1000 {
	sum += sum
}
*/

/*
if语句, 同for一样, if可以在条件表达式前执行一个简单的初始化语句
if v := math.Pow(x, n); v < lim {
	return v
}
if中声明的任何变量可以在else语句块中使用
*/

/*
switch语句, 默认只执行选择的case语句, 除非以fallthrough结束, case无需为常量, 且不必为整数; case语句的求值顺序为从上到下
switch os := runtime.GOOS; os {
case "darwin":
	fmt.Printf("OS X")
case "linux":
	fmt.Println("Linux.")
default:
	fmt.Printf("%s. \n", os)
}
*/

/*
defer语句,
defer 语句会将函数推迟到外层函数返回之后执行。
推迟调用的函数其参数会立即求值，但直到外层函数返回前该函数都不会被调用。
推迟的函数调用会被压入一个栈中。当外层函数返回时，被推迟的函数会按照后进先出的顺序调用。
*/

/*
指针
var p *T, 指向类型为T的指针
i := 10
p = &i -- &生成指向其操作数的指针
* 表示指针指向的底层变量, 也结束通常所说的"间接引用"或"重定向"
fmt.Printf(*p)
*p = 100
*/

/*
结构体
type Vertex struct {
	X int
	Y int
}
var p *Vertex


package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

var i Vertex = Vertex{1, 2}

var p *Vertex = &i

func main() {

	fmt.Printf(string(p.X))
}

*/

/*
数组:
类型[n]T表示拥有n个T类型的值的数组

var a [10]int


切片

每个数组的大小都是固定的。而切片则为数组元素提供动态大小的、灵活的视角。在实践中，切片比数组更常用。
类型 []T 表示一个元素类型为 T 的切片。
切片通过两个下标来界定，即一个上界和一个下界，二者以冒号分隔：
a[low : high]
它会选择一个半开区间，包括第一个元素，但排除最后一个元素。
以下表达式创建了一个切片，它包含 a 中下标从 1 到 3 的元素：
a[1:4]
*/

package main

import "fmt"

func main() {
	a := [3]int {1,2,3}

	b := a[0: 1];

	fmt.Println(string(a[1]))
	fmt.Printf(string(b[0]))
}
















