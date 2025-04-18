const list = [
  {
    id: 1,
    parentId: null,
    text: "Zastosowanie",
    link: "#Zastosowanie",
  },
  {
    id: 44,
    parentId: null,
    text: "Historia",
    link: "#Historia",
  },
  {
    id: 7,
    parentId: 44,
    text: "Dialekty",
    link: "#Dialekty",
  },
  {
    id: 31,
    parentId: 44,
    text: "Java",
    link: "#Java",
  },
  {
    id: 24,
    parentId: null,
    text: "JavaScript dla WWW",
    link: "#JavaScript_dla_WWW",
  },
  {
    id: 10,
    parentId: 24,
    text: "Interakcja",
    link: "#Interakcja",
  },
  {
    id: 25,
    parentId: 24,
    text: "Osadzanie",
    link: "#Osadzanie",
  },
];
const articleList = document.querySelector(".article__list");
const tableOfContent = document.createElement("ul");
articleList.appendChild(tableOfContent);

const firstListItemDepth = list.filter(
  (listItem) => listItem.parentId === null
);

for (item of firstListItemDepth) {
  tableOfContent.appendChild(createListItem(item));
}

const secondListItemDepth = list.filter(
  (listItem) => listItem.parentId !== null
);

for (item of secondListItemDepth) {
  parentListItem = document.querySelector(`[data-id="${item.parentId}"]`);
  if (!parentListItem.querySelector("ul")) {
    parentListItem.appendChild(document.createElement("ul"));
  }
  parentListItem.querySelector("ul").appendChild(createListItem(item));
}

function createListItem(list) {
  const listItem = document.createElement("li");
  listItem.dataset.id = item.id;
  const listItemAnchor = document.createElement("a");
  listItemAnchor.href = item.link;
  listItemAnchor.innerText = item.text;
  listItem.appendChild(listItemAnchor);
  return listItem;
}
