var Nodes = function (val) {
  this.value = val;
  this.next = null;
};

var MyLinkedList = function () {
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (!this.head) return -1;
  let count = 0,
    current = this.head;

  while (current) {
    if (count === index) return current.value;
    count++;
    current = current.next;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const prevHead = this.head;
  this.head = new Nodes(val);
  this.head.next = prevHead ? prevHead : null;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.head) this.head = new Nodes(val);

  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = new Nodes(val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let ptr = this.head,
    cachedPtrNext = null,
    count = 0;

  if (index === 0 && !ptr) this.head = new Nodes(val);

  while (count < index - 1 && ptr) {
    count++;
    ptr = ptr.next;
  }
  if (ptr) {
    cachedPtrNext = ptr.next;
    ptr.next = new Nodes(val);
    ptr.next.next = cachedPtrNext;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
