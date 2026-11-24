# aiesl.com — 站点说明（给 Claude / 任何 AI 助手）

> 写于 2026-11-24（SEO + GEO 体检后）。详细规范在仓库外：`E:\桌面\aiesl.com\AIESL-项目规范.md`（执行规范，冲突时以它为准）、`AIESL-内容边界文档.md`（定位与分工）、`BLOG_PUBLISHING_STANDARD.md`（早期版）。目录索引：`E:\桌面\aiesl.com\INDEX.md`。
> 注意：本地文件夹叫 `_deploy_aieink.com`，但远程就是 `PanPanTech/aiesl.com`，不是 aieinksmart 的仓库。

## 站点定位
- **AiESL = 面向零售货架的 AI 原生开放平台**：电子价签（ESL）管理、AI 动态定价、货架监控、零售媒体、开放 ESL 中间件（MQTT/API，5+ 品牌）。英文，面向海外零售商 / 集成商 B2B。
- 一句话边界：**卖的是“平台与集成”，不是“一片电子价签”**。硬件参数、批发、OEM 属于 aieinksmart.com。
- 目标：Google 自然搜索 + AI 搜索（ChatGPT / Perplexity / Google AI 模式）引用 → 询盘（全站弹窗表单 `#quoteForm`）。

## 品牌事实（页面、JSON-LD、llms.txt 必须一致）
- 品牌 AiESL（母公司 PanPanTech，成立 2015），地址 Building A1, Yuexiu iPARK Yuegang Zhigu, Nansha District, Guangzhou
- 邮箱 info@einksmart.com；电话 +86-13925118851
- 首页硬指标：500M+ 可管理标签 · 0.3s 全店价格同步 · 5+ 品牌集成。Prism 彩色电子纸屏是**样品、未认证**，不得写成已认证
- 不确定的事实（认证、价格、案例、客户名）不要编造，留 TODO 让人工确认；客户照片/Logo 需确认可公开

## 跨站关键词分工（硬边界，避免互相抢排名）
| 领域 | aiesl.com | aieinksmart.com | einksmart.com | aiesl.cn |
|---|---|---|---|---|
| AI ESL 概念簇（ai esl / ai price tags / edge ai shelf monitoring / ai-driven retail automation） | ✅ 独占（支柱页 `what-is-ai-esl.html`） | ✗ | ✗ | 中文版可做 |
| 平台 / 中间件 / 开放 API / 系统集成（POS/ERP/MQTT）决策层 | ✅ 独占 | 仅技术实现文 | ✗ | 中文 |
| AI 动态定价、货架监控、零售媒体 | ✅ 独占 | ✗ | ✗ | 中文 |
| 行业方案（超市/药店/便利/仓储/电子/DIY）、ROI/成本/选型问句 | ✅ 主做 | 仅 implementation 长尾 | ✗ | 中文 |
| 市场规模/行业数据 | ✅（`electronic-shelf-label-market-size.html`） | 备选 | ✗ | — |
| e-ink 技术科普（what is e ink 等） | ✗ 让出 | ✅ 独占 | ✗ | — |
| 硬件型号参数、配件、网关硬件、批发 / OEM / MOQ / 工厂 / “china … wholesale” | ✗ 让出 | ✅ 独占 | ✗ | — |
| 零售商新闻（Walmart/Aldi…） | 仅市场数据角度 | ✅ 主做 | ✗ | — |
| 电子纸艺术画框 / 消费级电子纸 | ✗ | ✗ | ✅ | — |
| 中文市场、百度 | ✗（不做中文页） | ✗ | ✗ | ✅ 独占 |
| 客流统计 → pyroglaux.com；清洁机器人 → panpantechnology.com | ✗ | ✗ | ✗ | — |

- 跨站纪律：同一目标词两站不得同时发新文；新选题先查本表 + 对方 GSC 排名；可互相外链。
- TODO：`esl-vendors-compared-vusiongroup-pricer-hanshow.html`（2026-11 上线）与边界文档“竞品评测归 aieinksmart”冲突，需用户确认归属，避免与 aieinksmart 同类页蚕食。
- TODO：aiesl.cn 的实际选题范围未核对，上表只写了“中文市场”。

## 关键词策略（依据 GSC 2026-08-23 ~ 11-22，3010 曝光 / 17 点击 / CTR 0.6% / 平均排名 39）
- **同名噪音，不优化、不进 KPI**：`aiesl`、`aiesl ess portal`、`ess.aiesl`、`ess portal aiesl`、`aiesal`/`ayesl` 等（≈251 曝光，均为印度 AI Engineering Services Ltd，aiesl.in）。计算 CTR 前先剔除。
- **真实入口是问句 + AI 引用，不是品类大词**：品类大词（electronic shelf labels / digital price tags / electronic price tag，排名 60–100）曝光大但不会有点击，**不追**；只靠问句页、工具页、平台页拿流量。
- AI 型问句（排名 1–9，0 点击）：are electronic shelf labels worth the upfront cost for a mid-size grocery chain · what is the roi of switching from paper price tags to esl · what is the best esl system for high-volume sku environments · vendors of electronic labeling with api · what types of electronic shelf labels are available（15.2）→ 页面开头必须有「加粗一句话直答 + 询盘入口」
- **不追**：`electronic price tag for automotive trade`、`mobile network digital price tag`、`china … wholesale`（意图不符或属 aieinksmart）
- 排名 5–10 但 CTR 0 的页面优先改 title/meta：`walmart-digital-shelf-labels`（134 曝光，8.7）、`electronic-shelf-labels-pricing-accuracy`（111，9.5）、`esl-roi-calculator-payback`（55，8.3）、`Cases`、`industry-supermarket`、`esl-battery-life`

## 内容规范（摘自项目规范，细节以它为准）
- 母版：克隆站内最新一篇文章的完整骨架（head 顺序、5 项主导航、四栏 footer + 兄弟站行、询盘 modal、`<script src="app.js">`），不发明新样式
- 文章：2,500–3,500 词；H1/title/slug/meta 含同一目标词；首屏 `answer-box` 一句加粗直答；问句式 H2；表格下必须 `Source:`；FAQ 5–8 问；内链 ≥5、外链 3–6（`target="_blank" rel="noopener"`）；侧边 TOC 必须有
- JSON-LD 三段：`BlogPosting` + `BreadcrumbList` + `FAQPage`；FAQ 与可见内容**逐字一致、数量相同**；扩写旧文只改 `dateModified`
- 接线三处：`blog.html`（卡片插顶部）、`sitemap.xml`（字母序，本站无 lastmod）、`llms.txt`（重点参考页）
- 每个数字要有可点开的一手来源；自有经验写 “based on our project experience”
- 禁止：正文出现 SEO/GEO/keyword volume/traffic analysis/TODO/lorem；攻击性竞品比较；内部端点、字段代号、客户配置（`E:\桌面\aiesl.com\技术文档\` 只供理解，对外脱敏）；段末堆 Keywords
- 发布前跑项目规范第 5 节校验清单（图片存在、内链可解析、TOC 锚点、JSON-LD 可解析、标签平衡、canonical = og:url、375px 无溢出）；批量替换后必须重查标签平衡

## 技术
- 纯静态站，无构建步骤；GitHub Pages，`main` 根目录直接上线（CNAME www.aiesl.com）。没有 npm/CI 校验，全靠人工校验清单。仓库里没有会覆盖页面的 build 脚本。
- 共享脚本 `app.js`：导航、询盘 modal、ROI 计算器、GA4
- GA4：`G-3KRZTZ06RE`（媒体资源 561871651，账号 PanPanTech 414295528），由 `app.js` 动态加载，2026-11-02（#10）起才开始有数据
- 询盘表单 `#quoteForm` → `https://inquiry.panpantechnology.com/api/inquiries`（`lead_brand: 'AiESL Global'`），失败时 alert 让用户发邮件
- 转化事件（2026-11-24 加，在 `app.js`）：`generate_lead`（询盘 API 返回成功后）、`contact_click`（mailto / tel / WhatsApp 联系链接；分享按钮不算）。在 GA4 标为关键事件
- 首页内链一律写 `/` 或 `/#锚点`，不要写 `index.html`（会在 GA4/GSC 里产生重复网址）
- 问句页面在第一个 `answer-box` 后放 `.answer-cta` 按钮行（主按钮 `openModal()` + 一个相关内链）
- 博客流程：定时任务周一/周四写草稿到本地 `draft/<slug>` 分支、不推送；用户说「可以发」才运行 `aiesl-publish-approved-draft` 上线。不要自己推送草稿分支
- 发布后：GSC 对新 URL 请求编入索引（属性 `sc-domain:aiesl.com`，需用有权限的 Google 账号）

## 已知问题（2026-11-24 体检）
- GSC 收录了 `http://aiesl.com/`、`https://aiesl.com/`、`ess.aiesl.com`、`/grocery-store-digital-price-tags-2`（TODO：确认 ess 子域是什么、-2 是否 404）
- GA4 Direct 占 90%、平均互动 4 秒，疑似机器人/内部流量（TODO：加内部 IP 过滤或数据过滤）
- 10/26 以来自然搜索 0 点击；11/16 当周曝光回升到 719

## 工作流
- 新改动开分支 `seo/<主题>-<MMDD>` 或 `post/<slug>-<MMDD>`，经用户确认后合并 main；一次更新只动相关文件
- 每两周看 GSC：曝光高 + CTR < 1% 且排名 ≤ 10 的页面优先改标题和开头
- 每月底：在 4 个 AI 平台跑 GEO 提示词清单（工作簿「竞品与GEO」页）；复检跨站分工表
- 跨站规范见 `E:\桌面\SEO`（总控）
