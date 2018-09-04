/**
 *双向链表中节点的构造函数
 * @class Node
 */
class Node {
	/**
	 * 构造函数
	 * @param {*} element // 要传入链表的元素
	 * @memberof Node
	 */
	constructor(element) {
		this.element = element;
		this.prev = null;
		this.next = null;
	}
}


class DoublyLinkedList {
	constructor() {
		// 双向链表的长度
		this.length = 0;
		// 双向链表的头节点
		this.head = null;
		// 双向链表的尾节点
		this.tail = null;
	}


	/**
	 * 向链表尾部添加元素
	 * @param {*} element 
	 */
	append (element) {
		let node = new Node(element);

		if(this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			let previous;
			let current = this.head;

			while(current.next) {
				current = current.next;
			}

			current.next = node;
			node.prev = current;
			this.tail = node;
		}
		this.length++;
	}


	/**
	 * 向链表中某个位置插入元素
	 * @param {*} position 
	 * @param {*} element 
	 * @return {Boolean} 插入成功返回 true，插入失败返回 false
	 */
	insert (position, element) {
		if(position >=0 && position <= this.length) {
			let node = new Node(element);
			let index = 0;
			let previous;
			let current = this.head;

			if(position === 0) {
				if(this.head === null) { // 空链表的情况
					this.head = node;
					this.tail = node;
				} else {
					current.prev = node;
					node.next = current;
					this.head = node;
				}
			} else if (position === this.length) { // 在末尾添加元素，这里单独拿出来是因为 双向链表 具有特殊的 尾节点
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			} else { // 在中间
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = node;
				node.next = current;
				node.prev = previous;
				current.prev = node;
			}
			this.length++;
			return true;
		} else {
			return false;
		}
	}	


	/**
	 * 移除双向链表中指定位置的元素
	 * @param {*} position
	 * @return {*} 移除成功返回被移除的元素，不成功则返回 false
	 */
	removeAt (position) {
		// 思路
		// position的边界值判断
		// 找到指定位置的元素 current，和指定位置的前一个元素 previous
		// 然后通过 previous.next = current.next; current.next.prev = previous; 操作删除此元素

		if(this.length > 0 && position >= 0 && position < this.length) {
			let current = this.head;
			let previous;
			let index = 0;

			if(position === 0) {
				if(this.length === 1) {
					this.head = null;
					this.tail = null;
				} else {
					this.head = current.next;
					this.head.prev = null;
				}
			} else if (position === this.length - 1) { // 删除末尾元素
				current = this.tail;
				this.tail = current.prev;
				this.tail.next = null;
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.length--;
			return true;
		} else {
			return false;
		}
	}


	/**
	 * 获取链表的头部
	 * @return {Any} 链表的头部
	 */
	showHead () {
		return head;
	};
  
	/**
	 * 获取链表长度
	 * @return {Number} 链表长度
	 */
	showLength () {
		return length;
	};
  
	/**
	 * 获取链表尾部
	 * @return {Any} 链表尾部
	 */
	showTail () {
		return tail;
	};
}



/**
 * 测试用例
 */

 // 初始化双向链表
 let doublyLinkedList = new DoublyLinkedList();
 console.log(doublyLinkedList)
 console.log('\n')
 
 // 调用 append() 添加元素
 doublyLinkedList.append(1);
 doublyLinkedList.append(1);
 doublyLinkedList.append(3);
 console.log(doublyLinkedList)
 console.log('\n')
 
 // 调用 insert 插入元素
 let isInsert = doublyLinkedList.insert(1,2);
 console.log(`插入结果:${isInsert}`)
 console.log(doublyLinkedList)
 console.log('\n')

 // 调用 removeAt 删除元素
 let isRemove = doublyLinkedList.removeAt(1);
 console.log(`删除结果:${isRemove}`)
 console.log(doublyLinkedList)
