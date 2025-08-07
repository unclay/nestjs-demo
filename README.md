## Nestjs Demo

+ nestjs-login 授权登录（账号密码 -> token -> 用户信息）


### nestjs-login

+ api/v1 接口是入门学习
+ api/v2 接口是进阶学习，可直接看V2接口

#### 登录（local策略）

+ 通过 `api/v2/login.controller.ts` 绑定 `AuthGuard('auth-local')` 守卫
+ 守卫调用 `auth/local.strategy.ts` 策略校验
+ 策略使用 `auth/auth.service.ts` 的 `validateUser` 方法校验账号密码
+ 校验通过 `auth/auth.service.ts` 的 `sign` 方法生成 `access_token`
+ 返回 `userInfo` 和 `access_token` 给到前端

#### 鉴权（jwt策略）

+ 前端请求时，`Header` 携带 `Authorization: Bearer [access_token]` 到后端
+ 后端通过 `auth/global-auth.guard.ts` 全局守卫鉴权
+ 全局守卫继承 `AuthGuard('auth-jwt')` 守卫
+ 守卫调用 `auth/jwt.strategy.ts` 策略校验
+ 策略从 `access_token` 解密出 `userInfo`，再从数据库查询完整用户信息
+ 返回完整 `userInfo` 给到前端
