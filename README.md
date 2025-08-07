## Nestjs Demo

+ nestjs-login 授权登录（账号密码 -> token -> 用户信息）


### nestjs-login

#### 步骤

+ 请求到 [POST] `/api/login` `{username: admin, password: 123456}`
    + 到达本地策略 `api/login/local.strategy.ts`, 校验后挂在用户信息到req.user
    + 到达控制器 `api/login/login.controller.ts`, 调用服务生成token
        + 到达 `api/login/login.service.ts`, 调用 sign 方法
            + 加密用户信息生成 token（加密密钥在`api/login/login.module.ts`）
            + 返回 token 给前端
    + 前端将 token 存储到本地，后续请求需要在请求头中携带 token

+ 请求到 [GET] `/api/login` `{ Authorization: Bearer token }`
    + 到达守卫 `api/login/jwt.strategy.ts` , 校验 token
        + 解密 token 里面的用户信息（加密密钥在`api/login/jwt.strategy.ts`）
        + 数据库查询对应用户，并挂到 `req.user` 
    + 到达控制器 api/login/login.controller.ts, 返回用户信息给前端