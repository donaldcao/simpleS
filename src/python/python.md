
## Operator
and or not
True False
None

10 / 3
10 // 3, 结果为整数
10 % 3

## Encoding
ASCII
Unicode 两个字节编码
UTF-8 用4到6个字节编码

ord(), chr(),  int(), float(), str(), bool()

'中文'.encode('utf-8')  --> b'\xe4\xb8\xad\xe6\x96\x87'

## format %d  %s %f %x
'Hi, %s, you have $%d.' % ('Michael', 1000000)

## 可变对象与不可变对象
- string为不可变对象
- tuple为不可变对象

## list
- list = ["Michael", "Bob", "Tracy"]
- list[0], list[-1]
- 可修改的数据结构
- list.append("Donald")
- list. insert(1, "Cao")
- list.pop(i) 删除指定位置的元素


## tuple
- 不可修改的数据结构
- t = (1,2,3)
- 定义只有一个元素的tuple t = (1, )

## dict
- d = {"name": "donald", "age" : 35}
- name in d / d.get("name") return None if not exits.
- d.pop("name") 删除一个键值对
- dict的key是<bold>不可变对象</bold>


## set
- s = set([1,2,3,4,4])
- 没有重复的Key
- s.add(5)
- s.remove(2)
- 

## 条件判断
- if:  elif:  else:
- for i in names
- while
- break
- continue

## 函数
- 定义
 ```
def myFunction(x, y):
    return x + y

def myMethod(a, b):
    return a + b

 ```
- 调用
- 类型检查 if not isinstance(x, (int, float)):
- 

## 切片
- d[start:end:step]

## 迭代
- for key in d:

## 列表生成式  List Comprehensions
- [ x*x for x in range(1, 11) if x % 2 == 0]
- [x if x % 2 == 0 else -x for x in range(1, 11)]
- 

## 生成器   generator
- 把列表生成式的[]改成(),用来创建generator 
- g = (x*x for x in range(1, 11))


## 迭代器  Iterable & Iterator
- isinstance([], Iterable)
- 可以使用isinstance()判断一个对象是否是Iterable对象
- 可以被next()函数调用并不断返回下一个值的对象称为迭代器：Iterator
- 凡是可作用于for循环的对象都是Iterable类型；
- 凡是可作用于next()函数的对象都是Iterator类型，它们表示一个惰性计算的序列；
- 集合数据类型如list、dict、str等是Iterable但不是Iterator，不过可以通过iter()函数获得一个Iterator对象。



