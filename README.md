# VueCompositionApiTutorial

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Difference Between `ref()` And `reactive()`
Reference: [VueUse 作者的分享](https://youtu.be/84tk3XlS71c?t=892)

### `ref()`
1. 需要 `.value`
2. 因為 `.value` 的關係，可以清楚知道正在使用或修改響應式的資料


### `reactive()`
1. 不需要 `.value`
2. 因為沒有 `.value` 的關係，無法清楚區分是否正在使用或修改響應式的資料
