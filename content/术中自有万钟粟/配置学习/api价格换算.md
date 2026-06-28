---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '44ebb6bd-03f1-44be-8ad4-94086b6d7d5f'
  PropagateID: '44ebb6bd-03f1-44be-8ad4-94086b6d7d5f'
  ReservedCode1: '697fd1ef-802b-4983-890f-90d3a38226a6'
  ReservedCode2: '697fd1ef-802b-4983-890f-90d3a38226a6'
---

---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9287629b-577a-4f2b-aae6-646aa9b5c1a5'
  PropagateID: '9287629b-577a-4f2b-aae6-646aa9b5c1a5'
  ReservedCode1: 'de0da868-9620-40e4-916c-659172d3d7a9'
  ReservedCode2: 'de0da868-9620-40e4-916c-659172d3d7a9'
---

---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e46a2356-9644-4070-a26a-f78156cae0e2'
  PropagateID: 'e46a2356-9644-4070-a26a-f78156cae0e2'
  ReservedCode1: '1a36f208-45dd-480c-9e6e-9066bb93342f'
  ReservedCode2: '1a36f208-45dd-480c-9e6e-9066bb93342f'
---

# API 价格换算

[← 返回 MOC](MOC.md) | [← 主页](../../index.md)|[←AI配置与学习](AI配置与学习.md)

[click👉🏻参考网页](https://api.daheiai.com/),   这人收集了很多,但我感觉收集的没我现在用的好

---

## 换算规则说明

- **官方原价**：Anthropic 官网公布的美元定价（\$/M token）
- **1元1刀无倍率**：中转站充值比例为 1元人民币 = 1美元，无加价倍率
- **换算成实际美元**：按当前汇率 1元 ≈ \$0.1457（1美元 = 6.8649元，2026年4月9日），将中转站¥价格换算为真实美元成本

---

## Claude Sonnet 4.6 各中转站价格对比

> 以 Claude Sonnet 4.6 为例，单位均为 **\$/M token（美元/百万token）**
> 汇率参考：1美元 = 6.8649元（2026年4月9日），1元 ≈ \$0.1457

| 计费渠道                 | Input (\$/M) | Output (\$/M) | 简单介绍                                                      |
| :----------------------- | :----------- | :------------ | :------------------------------------------------------------ |
| **官方原价**       | \$3.00       | \$15.00       | 官方原价                                                      |
| **1元1刀无倍率**   | \$0.4371     | \$2.1855      | 良心价,罕见,出现在早期,或者像这样的自建https://spatialai.vip/ |
| **1元1刀1.5倍率**  | \$0.6557     | \$3.2783      | 淘宝价,小贵                                                   |
| https://aiberm.com/      | \$0.95       | \$4.75       | 从参考网站上拉下来的,说这个便宜但是好像不便宜啊,我花了35啊    |
| https://foxcode.rjj.cc/  | \$0.29       | \$1.45        | 低价,参考网站说:部分逆向接口,token消耗较快,有波动             |
| https://www.huanapi.com/ | \$0.333      | \$1.667       | 良心,且保真,但是我知道的一个使用案例是卡                      |

---

> AI生成

> AI生成

> AI生成