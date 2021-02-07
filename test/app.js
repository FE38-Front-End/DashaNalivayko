class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }
    this.tail.next = newNode;
    this.tail = this.tail.next;
    return this;
  }
}

let b = new LinkedList();
b.append(5);
b.append(10)
console.log(b)



// delete(value) {
//   // Если нет head значит список пуст.
//   if (!this.head) {
//     return null;
//   }

//   let deletedNode = null;

//   // Если head должен быть удален, то делаем следующий узел новым head.
//   while (this.head && this.head.value === value) {
//     deletedNode = this.head;

//     // Переназначаем следующий за head узел на новый head.
//     this.head = this.head.next;
//   }

//   let currentNode = this.head;

//   // Если следующий узел должен быть удален,
//   // делаем узел через один, следующим для проверки.
//   // Перебираем все узлы и удаляем их, если их значение равно указанному.
//   if (currentNode !== null) {
//     while (currentNode.next) {
//       if (currentNode.next.value === value) {
//         deletedNode = currentNode.next;
//         // Перезаписываем, чтобы узел через один стал следующим узлом.
//         currentNode.next = currentNode.next.next;
//       } else {
//         currentNode = currentNode.next;
//       }
//     }
//   }

//   // Проверяем, должен ли tail быть удален.
//   // Так как, если в цикле мы удаляем последний узел,
//   // то с предпоследнего узла убираем только ссылку на него.
//   // Поэтому делаем проверку на его удаление с "tail".
//   if (this.tail && this.tail.value === value) {
//     // в данном случае currentNode это или предпоследний узел или head.
//     this.tail = currentNode;
//   }

//   return deletedNode;
// }
