本项目是将普通的vue项目进行逐步转换为支持ts的tsx项目的基本配置

### 配置
- webpack 4.*
- vue 2.*

需要安装的包
- "vue-property-decorator": "^8.0.0"
- "babel-helper-vue-jsx-merge-props": "^2.0.3",
- "babel-plugin-syntax-jsx": "^6.18.0",
- "babel-plugin-transform-vue-jsx": "^3.7.0",
- "ts-loader": "^5.3.3",
- "typescript": "^3.3.3333",

版本号只是代表我当前安装的版本


### ts-loader和typescript是用来使项目支持ts的
需要在项目根目录下增加tsconfig.json配置
```$xslt
{
  "compilerOptions": {
    "module": "es2015",
    "moduleResolution": "node",
    "target": "es5",
    "experimentalDecorators": true,  // 如果使用到了装饰器
    "jsx": "preserve", // 如果使用了jsx
    "sourceMap": true
  },
  "exclude": [
    "node_modules"
  ]
}
```

### vue-property-decorator
为了使项目可以支持装饰器模式，可以直接将类解析成vue的component
```$xslt
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class Decorator extends Vue {
  name = 'decorator'
}
export default Decorator;
</script>
```

### jsx
剩下三个则是用来支持jsx模式的
如果jsx和ts相结合了，那么就是tsx
```$xslt
import { Vue, Component } from 'vue-property-decorator';

@Component({})
class Jsx extends Vue {
  render(h) {
    return (
      <div>
        <h1>如果能加载到这里，说明jsx已经起了作用了吗</h1>
      </div>
    );
  }
}
export default Jsx;
```

### vue.config.js
如果要项目支持tsx？则需要对loader也进行一些配置
```$xslt
module.exports = {
  configureWebpack: {
    entry: './src/main.ts',
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', 'tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  },
};
```

### .d.ts
这个文件主要是告诉ts，如果遇到vue的文件，那么不要处理，直接交给vue-loader处理，所以简单配置一下，属于ts范畴了
```$xslt
declare module "*.vue" {
  import Vue from 'vue';
  export default Vue;
}
```

### 总结
项目是最简单的项目，之所以没有使用vue-cli直接创建带有ts版本的项目，主要是考虑了，有很多同学是需要在已有业务代码的仓库中进行迁移的。
项目虽然不难，不大。但是也确实踩了一些坑。如果有借鉴的同学可以直接看配置。
