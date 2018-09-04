/**
 * 节点类
 */
class Node {
	constructor(element){
		this.element = element;
		// 下个节点的地址
		this.next = null;
	}
}

/**
 * 单向链表
 */
class LinkedList {
	constructor() {
		// 链表长度，节点数量
		this.length = 0;
		// 头节点，初始化为 null
		this.head = null;
	}

	/**
	 * 向单向列表尾部添加元素
	 * @param {Any} element 要加入链表的节点
	 */
	append(element) {
		let node = new Node(element);
		let current;

		if(this.head === null) { // 如果是空链表，初始化头节点
			this.head = node;
		} else { // 如果是非空列表，则要找到末尾节点，然后再添加
			current = this.head;
			// 从 head 开始遍历，直到找到末尾节点
			while(current.next) { 
				current = current.next;
			}

			current.next = node;
		}
		this.length++;
	}


	/**
	 * insert
	 * 向单向列表中某个位置插入节点
	 * @param {Number} position 要插入的位置
	 * @param {Any} element 要插入链表的节点
	 * @return {Boolean}   插入成功返回true，失败返回false
	 */
	insert (position, element) {
		// 思路
		// 往某个位置插入节点时，首先要找到此位置的节点 current，以及前一个节点 previous
		// 这样即可通过 previous.next = node; node.next = current; 完成插入操作
		// 从 head节点开始遍历直到 position 位置的节点
		// position 有边界值

		if(position >= 0 && position <= this.length) {
			let node = new Node(element);
			let current = this.head;
			let previous;
			let index = 0;

			if (position == 0) { // 添加头节点
				node.next = current;
				this.head = node;
			} else {
				while(index++ < position) { 
					// 遍历查找需要插入的位置的节点
					previous = current;
					current = current.next;
				}
				// node是要插入的节点
				previous.next = node;
				node.next = current;
			}

			this.length++;
			return true;
		} else {
			return false;
		}
	}


	/**
	 * 查找某个元素在单向链表中的位置
	 * @param {*} element 要查找的元素
	 * @return {Number} 节点在单向链表中的位置
	 */
	indexOf(element) {
		// 思路
		// 从 head 节点开始遍历，如果 当前节点和要查找的节点相同，则返回 当前位置

		let current = this.head;
		let index = 0;

		while(current) {
			if(current.element === element) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	}


	/**
	 * 移除单向链表中指定位置的元素
	 * @param {Number} position 要查找的元素
	 * @return {Any} 移除成功返回被移除的元素，不成功则返回 null
	 */
	removeAt (position) {
		// 思路
		// 找到指定位置的前一个节点 previous 和 指定位置的节点
		// 通过 previous.next = current.next 操作实现删除元素
		// position 边界值判断

		if(this.length > 0 && position >= 0 && position < this.length) {
			let current = this.head;
			let previous = this.head;
			let index = 0;

			if(position === 0){
				this.head = this.head.next;
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			this.length--;
			return current.element;
		} else {
			return null;
		}
	}


	/**
	 * 移除给定的元素，注意是所有相同的元素
	 * @param  {Any} element 要移除的元素
	 * @return {Number}      移除元素的所有位置
	 */
	remove (element) {
		let isRemove = [];
		while(this.indexOf(element) != -1) {
			let index = this.indexOf(element);
			this.removeAt(index);
			isRemove.push(index);
		}
		return isRemove;
	}


	/**
	 * 获取单向链表的头部
	 * @return {Any} 单向链表的头部
	 */
	getHead () {
		return this.head;
	}

	/**
	 * 判断单向链表是否为空
	 * @return {Boolean} 为空则返回true，不为空则返回false
	 */
	isAmpty () {
		return this.length === 0
	};

	/**
	 * 返回单向链表长度
	 * @return {Number} 单向链表的长度
	 */
	size () {
		return this.length;
	};

}

/**
  * 测试用例
  */

 // 初始化单向链表
 let linkedList = new LinkedList();
 console.log(linkedList)
 console.log('\n')
 
 // 调用 append() 添加元素
 linkedList.append(1);
 linkedList.append(1);
 linkedList.append(3);
 console.log(linkedList)
 console.log('\n')
 
 // 调用 insert 插入元素
 let isInsert = linkedList.insert(1,2);
 console.log(`插入结果:${isInsert}`)
 console.log(linkedList)
 console.log('\n')
 
 // 调用 indexOf 查找节点位置
 let index = linkedList.indexOf(1);
 console.log(`节点位置:${index}`)
 console.log('\n')
 
 // 调用 removeAt 移除指定位置节点
 let node = linkedList.removeAt(3);
 console.log(`移除节点:${JSON.stringify(node)}`)
 console.log(linkedList)
 console.log('\n')
 
 // 调用 remove 移除指定元素
 let isRemove = linkedList.remove(1);
 console.log(`移除元素的位置:${isRemove}`)
 console.log(linkedList)
