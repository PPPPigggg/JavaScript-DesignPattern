const proxy = new Proxy(
  { age: 0 },
  {
    set(target, key, val) {
      if (key === 'age') {
        if (typeof val === 'number' && val > 0 && val <= 100) {
          target[key] = val
          return true
        }
        throw '错误'
      }
    }
  }
)

proxy.age = 100
console.log(
  '%c 🍒 proxy: ',
  'font-size:20px;background-color: #3F7CFF;color:#fff;',
  proxy
)
