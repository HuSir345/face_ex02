# 图片合成应用

这是一个基于 Next.js 的图片处理应用，允许用户上传两张图片并通过 Coze API 生成新的合成图片。

## 功能需求

- 用户可以同时上传两张图片
- 支持图片预览功能
- 调用 Coze API 处理图片
- 显示并允许下载生成的新图片
- 支持常见图片格式 (JPG, PNG)

## 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS
- axios (用于 API 请求)

## 页面风格

- 苹果官方网站风格样式
- 使用 Coze API 的合成效果

## 项目结构 

直接在根目录下创建代码文件，因此不需要帮我生成项目目录结构

## 实现步骤

0.在根目录下生成代码

1. 创建图片上传组件
   - 实现双图片上传功能
   - 添加图片预览功能
   - 添加基本的图片验证

2. 创建 API 路由
   - 处理图片上传
   - 与 Coze API 通信
   - 错误处理

3. 实现主页面逻辑
   - 状态管理
   - 加载状态显示
   - 结果展示

4. 样式设计
   - 响应式布局
   - 加载动画
   - 交互反馈

## 环境变量
Authorization=pat_0OjgQdYOMeEPHi3wUdDvZCLjaLOgbS87dDYMVdoxFQO9iYWuaamgn5pqrHKhlig2
COZE_API_URL=https://api.coze.cn/v1/workflow/run
workflow_id=7435930213924306978

调用coze接口代码：
1，接口文档地址：@https://www.coze.cn/docs/developer_guides/workflow_run 。
2，请求地址：@https://api.coze.cn/v1/workflow/run 。
3，Authorization=pat_0OjgQdYOMeEPHi3wUdDvZCLjaLOgbS87dDYMVdoxFQO9iYWuaamgn5pqrHKhlig2 。
4，workflow_id=7435930213924306978 。
5，请求示例：curl --location --request POST 'https://api.coze.cn/v1/workflow/run' \
--header 'Authorization: Bearer pat_hfwkehfncaf****' \
--header 'Content-Type: application/json' \
--data-raw '{
    "workflow_id": "73664689170551*****",
    "parameters": {
        "user_id":"12345",
        "user_name":"George"
    }
}'
6，返回示例：{
    "code": 0,
    "cost": "0",
    "data": "{\"output\":\"北京的经度为116.4074°E，纬度为39.9042°N。\"}",
    "debug_url": "https://www.coze.cn/work_flow?execute_id=741364789030728****&space_id=736142423532160****&workflow_id=738958910358870****",
    "msg": "Success",
    "token": 98
}

## 注意事项

- 确保处理大文件时的性能优化
- 添加适当的错误处理和用户反馈
- 实现图片格式和大小的验证
- 考虑添加加载状态指示器
