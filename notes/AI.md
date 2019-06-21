
## AI 手册

- www.huaxiaozhuan.com/
- pytorchnotes-donaldcao.notebooks.azure.com/j/notebooks/Untitled.ipynb?kernel_name=python36  Azure jupyter book note.

## 机器学习中不确定性有三个来源

- 模型本身固有的随机性。如：量子力学中的粒子动力学方程。
- 不完全的观测。即使是确定性系统，当无法观测所有驱动变量时，结果也是随机的。
- 不完全建模。有时必须放弃一些观测信息。
- 如机器人建模中：虽然可以精确观察机器人周围每个对象的位置，但在预测这些对象将来的位置时，对空间进行了离散化。则位置预测将带有不确定性。

## **神经网络**的典型训练过程如下

1. 定义包含一些可学习的参数(或者叫权重)神经网络模型；
2. 在数据集上迭代；
3. 通过神经网络处理输入；
4. 计算损失(输出结果和正确值的差值大小)；
5. 将梯度反向传播回网络的参数；
6. 更新网络的参数，主要使用如下简单的更新原则：  weight = weight - learning_rate * gradient

https://github.com/zergtant/pytorch-handbook/blob/master/chapter4/4.3-fastai.ipynb

https://docs.fast.ai/index.html


