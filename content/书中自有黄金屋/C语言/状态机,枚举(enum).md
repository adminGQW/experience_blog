# 状态机, 枚举(enum)

C++ 强枚举笔记尚未收录 | [← 返回 MOC](书中自有黄金屋/C语言/MOC.md)

```
// 优雅的做法
typedef enum {
    STATE_IDLE,
    STATE_RUNNING,
    STATE_ERROR
} SystemState;
SystemState currentState = STATE_IDLE;
```
