/*
 * 创建苹果状态
 */
import { makeAutoObservable } from 'mobx';

export default class AppleStore {
  constructor(apple) {
    this.id = apple.id;
    this.name = apple.name;
    this.weight = apple.weight;
    this.isEaten = apple.isEaten;

    makeAutoObservable(this, {}, { autoBind: true });
  }

  eat() {
    this.isEaten = true;
  }
}
