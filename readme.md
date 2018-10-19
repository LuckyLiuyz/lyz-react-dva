## 几点说明
### 1、关于压缩文件大小： 
    module-resume模块，未区分OS系统时（只有pc，还没拆出mobile相关文件）与 区分OS系统后（pc相关文件夹 && mobile相关文件都存在），压缩文件大小变化在 1% 左右。

### 2、项目目录结构：
    -- public 项目模板文件
    -- src 整个项目目录
        -- module-resume  个人主页模块
            -- mobile
                -- ... 移动端文件
            -- pc
                -- ...PC端文件
        -- public 各个模块的共通文件
        -- index.css 整个项目的共通样式
        -- index.js  整个项目的入口文件
        -- .webpackrc.js 项目运行 && 打包配置文件，等价于webpack.config.js
        -- package.json 项目信息、脚本、依赖等

