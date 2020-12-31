/*
 * @Author: your name
 * @Date: 2020-12-30 09:53:02
 * @LastEditTime: 2020-12-31 08:58:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\assets\js\event.js
 */

//  ^ 增加一个订阅者模式的函数

class Event {
  // 订阅的容器
  subscribers = [];
  // 开始订阅事件
  on(funName, event) {
    if (typeof event !== 'function') return;
    // 1. 寻找这个事件是否已经存在
    let index = this.subscribers.findIndex(item => item.funName === funName);
    if (index === -1) {
      let eventObj = {
        funName,
        events: [event],
      };
      this.subscribers.push(eventObj);
      // eventObj.events.push(event)
      return;
    }
    // 判断一下
    let index2 = this.subscribers[index].events.findIndex(item => {
      return event === item;
    });
    // console.log(index2);
    if (index2 === -1) {
      this.subscribers[index].events.push(event);
    }
  }

  // 只订阅一次
  once(funName, event) {
    if (typeof event !== 'function') return;
    let index = this.subscribers.findIndex(item => item.funName === funName);
    if (index === -1) {
      let eventObj = {
        funName,
        events: [{ event, isonce: true }],
      };
      this.subscribers.push(eventObj);
      // eventObj.events.push(event)
      return;
    }
    this.subscribers[index].events.push({ event, isonce: true });
  }
  // 发布事件 第一个参数为事件名
  emit() {
    if (arguments.length === 0) return;
    let index = this.subscribers.findIndex(
      item => item.funName === arguments[0],
    );

    if (index === -1 || this.subscribers[index].events.length === 0) return;
    let args = [...arguments];
    // 删除掉第一个参数
    args.splice(0, 1);
    let onceIndex = -1;
    this.subscribers[index].events.forEach((item, index) => {
      if (item.isonce) {
        onceIndex = index;
        item.event(...args);
      } else {
        item(...args);
      }
    });

    if (onceIndex !== -1) {
      this.subscribers[index].events.splice(onceIndex, 1);
    }
  }
  //  off要删除事件中的事件 ，如果是匿名函数则删除不了
  off(funName, event) {
    if (typeof event !== 'function') return;
    let index1 = this.subscribers.findIndex(item => item.funName === funName);
    if (index1 === -1) return;
    let index2 = this.subscribers[index1].events.findIndex(
      item => event === item || event === item.event,
    );
    if (index2 === -1) return;
    this.subscribers[index1].events.splice(index2, 1);
  }
}

export default new Event();
