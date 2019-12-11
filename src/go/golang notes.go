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


切片文法

切片文法类似于没有长度的数组文法。
这是一个数组文法：
[3]bool{true, true, false}
下面这样则会创建一个和上面相同的数组，然后构建一个引用了它的切片：
[]bool{true, true, false}

切片的长度和容量可以通过表达式len(s)和cap(s)来获取

切片的nil值, 底层没有数组

使用make函数创建切片
a := make([]int, "len", "cap")

append内建函数添加元素

Range, for Range遍历元素




package main

import "fmt"

func main() {
	a := [3]int {1,2,3}

	b := a[0: 1];

	fmt.Println(string(a[1]))
	fmt.Printf(string(b[0]))

	s := []int{2, 3, 5, 7, 11, 13}
	printSlice(s)

	// 截取切片使其长度为 0
	s = s[:0]
	printSlice(s)

	// 拓展其长度
	s = s[:4]
	printSlice(s)

	// 舍弃前两个值
	s = s[2:]
	printSlice(s)

	var pow = []int{1,2,4,8, 16,32,64,128}
	for i, v := range pow {
		fmt.Println("2**%d = %d\n", i, v);
	}

	pow2 := make([]int, 20)
	for i := range pow2 {
		pow2[i] = 1 << unit(i) // 2 ** i
	}

	for _, value := range pow2 {
		fmt.Println("%d\n", value)
	}
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

*/

/*
map
var m map[string]Vertex

m["name"] = value;

delete(m, key)

通过双赋值检测某个键是否存在：
elem, ok = m[key]


package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}

	fmt.Println(m["Bell Labs"]);
}


*/

/*
函数




package main

import (
	"fmt"
	"math"
)

func compute(fn func(float64, float64) float64) float64 {
	return fn(3,4)
}

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}

	fmt.Println(hypot(5, 12))
	fmt.Println(compute(hypot))
	fmt.Println(compute(hypot))
}
*/

/*
闭包


package main

import "fmt"

func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			pos(i),
			neg(-2*i),
		)
	}
}

*/

/*
方法:
Go 没有类。不过你可以为结构体类型定义方法。
方法就是一类带特殊的 接收者 参数的函数。
方法接收者在它自己的参数列表内，位于 func 关键字和方法名之间。
在此例中，Abs 方法拥有一个名为 v，类型为 Vertex 的接收者。



package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3,4}
	fmt.Println(v.Abs())
}
*/

/*
接口:
接口类型 是由一组方法签名定义的集合。
接口类型的变量可以保存任何实现了这些方法的值。

接口与隐士实现
package main

import "fmt"

type I interface {
	M()
}

type T struct {
	S string
}

// 此方法表示类型 T 实现了接口 I，但我们无需显式声明此事。
func (t T) M() {
	fmt.Println(t.S)
}

func main() {
	var i I = T{"hello"}
	i.M()
}

接口也可以像值一样传递, 接口值保存了一个具体底层类型的具体值.

空接口可以存储任意类型的值
*/

/*
类型断言:
t := i.(T)  该语句断言接口值 i 保存了具体类型 T，并将其底层类型为 T 的值赋予变量 t。若 i 并未保存 T 类型的值，该语句就会触发一个恐慌。
t, ok := i.(T) 若 i 保存了一个 T，那么 t 将会是其底层值，而 ok 为 true。否则，ok 将为 false 而 t 将为 T 类型的零值，程序并不会产生恐慌。

*/

/*
类型选择:
switch v := i.(type) {
case T:
    // v 的类型为 T
case S:
    // v 的类型为 S
default:
    // 没有匹配，v 与 i 的类型相同
}
*/

/*
错误:
package main

import (
	"fmt"
	"time"
)

type MyError struct {
	When time.Time
	What string
}

func (e *MyError) Error() string {
	return fmt.Sprintf("at %v, %s",
		e.When, e.What)
}

func run() error {
	return &MyError{
		time.Now(),
		"it didn't work",
	}
}

func main() {
	if err := run(); err != nil {
		fmt.Println(err)
	}
}
*/

/*
goroutine:
Go 程（goroutine）是由 Go 运行时管理的轻量级线程。
go f(x, y, z)
会启动一个新的 Go 程并执行
f(x, y, z)
f, x, y 和 z 的求值发生在当前的 Go 程中，而 f 的执行发生在新的 Go 程中



package main

import (
	"fmt"
	"time"
)

func say(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}

func main() {
	go say("world")
	say("hello")
}
*/




/*
信道 chan
package main

import (
	"fmt"
)

func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}

	c <- sum
}

func main() {
	s := []int{7, 2, 8, -9, 4, 0}
	c := make(chan int)
	go sum(s[:len(s)/2], c)
	x := <- c
	fmt.Println(x)

	go sum(s[len(s)/2:], c)
	y := <- c
	fmt.Println(y)
	// x, y := <- c, <- c

	fmt.Println(x, y, x+y)
}


带缓冲的信道:
信道可以是 带缓冲的。将缓冲长度作为第二个参数提供给 make 来初始化一个带缓冲的信道：
ch := make(chan int, 100)
仅当信道的缓冲区填满后，向其发送数据时才会阻塞。当缓冲区为空时，接受方会阻塞。
修改示例填满缓冲区，然后看看会发生什么。

close函数, 通过调用close函数关闭信道, 只有发送者能关闭信道, 接受者不能关闭信道
*/

/*
select语句:
select 语句使一个 Go 程可以等待多个通信操作。
select 会阻塞到某个分支可以继续执行为止，这时就会执行该分支。当多个分支都准备好时会随机选择一个执行
package main

import "fmt"

func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for {
		select {
		case c <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("quit")
			return
		}
	}
}

func main() {
	c := make(chan int)
	quit := make(chan int)
	go func() {
		for i := 0; i < 10; i++ {
			fmt.Println(<-c)
		}
		quit <- 0
	}()
	fibonacci(c, quit)
}
*/

/*


sync.Mutex

我们已经看到信道非常适合在各个 Go 程间进行通信。

但是如果我们并不需要通信呢？比如说，若我们只是想保证每次只有一个 Go 程能够访问一个共享的变量，从而避免冲突？

这里涉及的概念叫做 *互斥（mutual*exclusion）* ，我们通常使用 *互斥锁（Mutex）* 这一数据结构来提供这种机制。

Go 标准库中提供了 sync.Mutex 互斥锁类型及其两个方法：

    Lock
    Unlock

我们可以通过在代码前调用 Lock 方法，在代码后调用 Unlock 方法来保证一段代码的互斥执行。参见 Inc 方法。

我们也可以用 defer 语句来保证互斥锁一定会被解锁。参见 Value 方法。

*/

/*
Data Structure & Algorithm
https://github.com/Workiva/go-datastructures
https://github.com/shady831213/algorithms

*/


































