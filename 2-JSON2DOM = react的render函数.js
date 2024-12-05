/**
 * json2Dom 通过json数据来生成dom元素的函数
 * 类似于react的render函数 通过描述ui结构的对象 来渲染实际的dom
 * react中 render主要是将组建的props转化为virtualdom 
 * 然后react 如果虚拟dom 更新实际的浏览器dom
 * react的render返回的就是react元素（jsx或者react.createElement调用的结果） 这些元素描述了dom树的结构
*/
// json2Dom可能的实现
function JSON2Dom(json) {
    if(!json || typeof json !== 'object')
        return null

    // 创建对应的元素
    const element = document.createElement(json.tag)

    // 设置元素的属性
    if (json.props) {
        for(let props in json.props) {
            if(prop === 'children') {
                // 如果有children属性 则递归处理子元素
                json.props[prop].forEach(child => {
                    element.appendChild(JSON2Dom(child))
                })
            } else {
                element.setAttribute(prop, json.props[prop])
            }
        }
    }

    return element
}

// 示例 JSON 数据描述一个简单的 DOM
const json = {
    tag: 'div',
    props: {
        class: 'container',
        children: [
            {
                tag: 'h1',
                props: { children: ['Hello, world!'] }
            },
            {
                tag: 'p',
                props: { children: ['This is a paragraph.'] }
            }
        ]
    }
};


/**
 * 工作原理
JSON2DOM 函数接收一个 JSON 对象作为输入，tag 表示元素的标签名称，props 是元素的属性（如类名、ID、样式等）。
如果 props 中有 children，它会递归地调用 JSON2DOM 来生成子元素。
最后，将生成的 DOM 元素返回，并通过 appendChild 插入到页面中。
与 React 的区别
React 的 render 函数返回的是虚拟 DOM，而不是直接操作浏览器的 DOM。
React 在渲染时会做 虚拟 DOM 对比，计算出最小的变化，再将这些变化更新到实际的 DOM。
JSON2DOM 只是将 JSON 数据直接转化为浏览器的 DOM 元素，没有虚拟 DOM 的优化机制。
总结
JSON2DOM 可以类比于 React 的 render 函数，但它并不具备 React 的虚拟 DOM 和更新机制。它只是一个简单的将 JSON 描述的 UI 结构转化为真实 DOM 元素的实现。 React 的 render 更加复杂，涉及到状态管理、虚拟 DOM、diff 算法和更新 DOM 的优化等。
总结 主要通过document.createElement element.appendChild和element.setAttribute更新修改元素
 */

