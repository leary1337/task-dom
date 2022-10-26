/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const elem = document.createElement(tag);
        elem.innerHTML = content;
        document.body.appendChild(elem);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const firstItem = createItem(1);
    document.body.appendChild(firstItem);
    for (let i = 1; i < level; i++) {
        const nodes = document.getElementsByClassName(`item_${i}`);
        for (let node of nodes) {
            for (let j = 0; j < childrenCount; j++) {
                const child = createItem(i + 1);
                node.appendChild(child);
            }
        }
    }
    return document.getElementsByClassName('item_1')[0];
}

const createItem = (level) => {
    const item = document.createElement('div');
    item.className = `item_${level}`;
    return item;
};

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const tree = generateTree(2, 3);
    const elems = tree.getElementsByClassName('item_2');
    for (let elem of elems) {
        const item = document.createElement('section');
        item.className = `item_2`;
        while (elem.firstChild) {
            item.appendChild(elem.firstChild);
        }
        elem.replaceWith(item);
    }
    return tree;
}
