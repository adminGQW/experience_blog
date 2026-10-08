# 状态机, 枚举(enum)

[←C++ 强枚举](../C++PrimerPlus/强枚举.md) |[← 返回MOC](书中自有黄金屋/C语言/MOC.md)

```
// 优雅的做法
typedef enum {
    STATE_IDLE,
    STATE_RUNNING,
    STATE_ERROR
} SystemState;
SystemState currentState = STATE_IDLE;
```
