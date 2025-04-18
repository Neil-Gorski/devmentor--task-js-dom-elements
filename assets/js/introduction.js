const tooltipList = document.querySelectorAll(".tooltip");
const tooltipArr = Array.from(tooltipList);

if (tooltipArr.length != 0) {
  for (element of tooltipArr) {
    const stats = {
      classList: [...element.classList],
      url: element.dataset.url,
      tooltipType: element.dataset.tooltipType,
      tooltipContent: element.dataset.tooltipContent,
      text: element.innerText,
    };

    element.replaceWith(createTooltip(stats));
  }
}

function createTooltip(obj) {
  const tooltipSpan = document.createElement("span");
  if (obj.classList.length != 0) {
    for (classElement of obj.classList) {
      tooltipSpan.classList.add(classElement);
    }
  }
  const tooltipAnchor = document.createElement("a");
  tooltipAnchor.innerText = obj.text;
  tooltipAnchor.href = obj.url;
  tooltipSpan.appendChild(tooltipAnchor);

  const tooltipSpanContent = document.createElement("span");
  tooltipSpanContent.classList.add("tooltip__box");
  if (obj.tooltipType === "text") {
    tooltipSpanContent.classList.add("tooltip__box--text");
    tooltipSpanContent.innerText = obj.tooltipContent;
  } else if (obj.tooltipType === "image") {
    tooltipSpanContent.classList.add("tooltip__box--img");
    const tooltipImg = document.createElement("img");
    tooltipImg.classList.add("tooltip__image");
    tooltipImg.src = obj.tooltipContent;
    tooltipSpanContent.appendChild(tooltipImg);
  }

  tooltipSpan.appendChild(tooltipSpanContent);
  return tooltipSpan;
}
