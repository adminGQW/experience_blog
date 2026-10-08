# portmacro.h

[← 返回 MOC](库中车马多如簇/嵌入式工程架构/freeRTOS/MOC.md) | [← 返回移植与配置](./移植与配置.md) | [← 主页](../../../index.md)

---

`portmacro.h` 是端口层头文件，管的是当前 CPU 和编译器组合下，`FreeRTOS` 该怎么定义基础类型和底层约定。

这里常见的有：

- `StackType_t`
- `BaseType_t`
- `UBaseType_t`
- `TickType_t`

其中最容易混的是：任务栈深度很多端口里按 `StackType_t` 计数，不是按字节计数。

对照看：
- 位、字节与字（相关笔记未收录）
- `stdint.h` 与定宽整数类型（相关笔记未收录）
- [移植与配置](./移植与配置.md)
