# 嵌入式工程架构 MOC

[← 返回库总览](库中车马多如簇/MOC.md)

1. [嵌入式项目骨架](嵌入式项目骨架.md),把需求,功能,前期准备,等等做好
2. 设计好层次架构![1782394614361](image/MOC/1782394614361.png)这里,Driver层是MCU厂家提供的库,然后在Core写好最基础的片内外设驱动函数接口供BSP和操作系统调用,	BSP层写调用外设的函数,如果是裸机就跳过OS层,否则OS统一管理中断,
3. 裸机使用[表驱法 笔记](./表驱法.md),操作系统使用[freeRTOS 笔记](./freeRTOS/MOC.md)
4. 外设到[库的MOC](库中车马多如簇/MOC.md)里去选

## 工程应用

- [2025 哨兵机器人电控](../../Projects/RoboMaster-robot.md)：对应 bsp/module/app 分层与 pub-sub 消息解耦实践。
- [智能农业装备 — 马铃薯捡拾机器人](../../Projects/agricultural-equipment.md)：查看底盘主控与作业机构驱动板的协作案例。
