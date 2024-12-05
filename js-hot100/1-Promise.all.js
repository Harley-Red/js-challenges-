/** 1. 实现一个Promise.all 
 * Promise.all 是一个js的原生方法 接受一个包含多个Promise的数组或者类似可迭代对象
 * 返回一个新的Promise
 * 如果所有的Promise都成功 
 * 如果任意一个Promise被拒绝 则返回的Promise会被立刻拒绝
*/
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('Argument must be an array'))
        }

        let results = []
        let completedPromises = 0

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((val) => {
                results[index] = val

                completedPromises += 1

                if (completedPromises === promises.length) {
                    resolve(results)
                }
            }).catch((error) => {
                return reject(error)
            })
        })

        if (promises.length === 0) {
            resolve([])
        }
    })
}
