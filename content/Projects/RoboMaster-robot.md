---
title: 2025 哨兵机器人电控
tags:
  - 项目
  - 嵌入式
  - RoboMaster
description: 基于 STM32F407 + FreeRTOS 的 RoboMaster 哨兵机器人嵌入式控制系统
date: 2024-09-01
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7a74b0ec-77b2-480a-ac3f-438d392f3bb1'
  PropagateID: '7a74b0ec-77b2-480a-ac3f-438d392f3bb1'
  ReservedCode1: '5880d40f-73cd-4bbe-9a69-5b5e085508af'
  ReservedCode2: '5880d40f-73cd-4bbe-9a69-5b5e085508af'
---

## 项目简介

面向 RoboMaster 2025 赛季的哨兵机器人全栈电控开发，基于湖南大学跃鹿战队开源的 basic_framework 二次开发，实现了云台追踪、底盘全向运动、发射机构控制、视觉通信、裁判系统解析等完整功能，并集成超级电容功率管理系统。

采用 bsp / module / app 三层架构，app 间通过 pub-sub 消息机制解耦，支持热更新 cherry-pick。

## 技术栈

- **主控芯片：** STM32F407IG (RoboMaster C 型开发板)
- **实时系统：** FreeRTOS
- **通信协议：** CAN / UART / USB VCP (虚拟串口)
- **控制算法：** 串级 PID + 前馈补偿 + 低通滤波
- **开发工具：** CubeMX + arm-gnu-gcc + VSCode + Ozone
- **上游框架：** [HNUYueLuRM/basic_framework](https://github.com/HNUYueLuRM/basic_framework)

## 项目时间

2024.09 - 2025.09

## 我的角色

嵌入式软件负责人，负责 app 层全部业务逻辑开发（云台/底盘/发射/指令分发）、达妙电机驱动接入、视觉通信协议设计、功率限制与超电管理，以及全赛季调试维护。

## 硬件配置

| 模块 | 型号 |
|------|------|
| 云台 | 大 yaw (达妙 DM4310) + 小 yaw (GM6020) + pitch (GM6020) |
| 底盘 | 4 × DM4310 |
| 发射 | 摩擦轮 (2 × M3508) + 拨弹盘 (M2006) + 弹舱盖 (MG90) |
| IMU | BMI088 (板载) + 达妙 DM-IMU |
| 视觉通信 | USB 虚拟串口 |
| 超级电容 | 超电控制板 (CAN 通信) |

## 核心功能

1. **云台控制：** 大 yaw 巡航 (6.25 圈减速比) + 自瞄模式切换，角度/速度串级 PID 闭环，支持双 IMU 源切换，自瞄模式下达妙 IMU 反馈 + 限幅逻辑保证安全
2. **底盘控制：** 全向运动解算，功率限制策略 (基于裁判系统实时功率反馈)，超级电容协同功率管理
3. **发射控制：** 摩擦轮定速 + 拨弹盘角度环定量供弹 + 微动开关单发限位，弹舱盖舵机控制
4. **视觉通信：** USB VCP 接收上位机自瞄/导航指令帧 (含 pitch/yaw/distance/开火建议/小陀螺标志)，CRC 校验
5. **裁判系统：** 完整协议解析，实时功率/血量/弹量/比赛阶段监测
6. **多板协同：** CAN 总线主从通信，主控板 + 超电板分布式架构，200ms 离线检测 + 方波重连

## 技术亮点

- **达妙 DM4310 双闭环 + 低通滤波：** 针对 DM4310 反馈噪声大的问题，对位置和速度分别配置 30Hz / 50Hz 低通滤波器，显著抑制底盘抖动
- **功率闭环 + 缓冲能量闭环：** 底盘输出经功率限制模块限幅，超级电容在功率裕余时储能、功率不足时释放，实测比赛全程未触发超功率保护
- **自瞄限幅安全机制：** 自瞄模式下对 DM 云台输出做分级限幅，防止自瞄异常时云台失控；DM-IMU 需整车重新上电才能复位，代码中增加状态守护
- **USB 虚拟串口通信：** 自定义 32 字节帧格式 (帧头 0xFF + 数据 + 校验 + 帧尾 0x0D)，支持接收中断和发送完成中断回调

## 项目成果

- 2025 全国大学生机器人大赛 RoboMaster 超级对抗赛 **国赛二等奖**（核心成员）
- 实测比赛全程功率管理稳定，零超功率触发
- 哨兵机器人完整实现云台自瞄/巡航 + 底盘全向 + 发射 + 超电四大子系统

## 相关链接

- **开源仓库：** [adminGQW/2025RM_Sentry_JSU](https://github.com/adminGQW/2025RM_Sentry_JSU)
- **上游框架：** [HNUYueLuRM/basic_framework](https://github.com/HNUYueLuRM/basic_framework)

> AI生成