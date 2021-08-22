function styled(attributes, ...values) {
  return function (tagName) {
    const [first, second] = attributes;
    const [firstD, secondD] = values;
    return `<${tagName} ${first}="${firstD}" ${second}="${secondD}" />`;
  };
}

const className = "new-img";
const srcURL = "https://picsum.photos/500/500";
const convertor = styled`class${className}src${srcURL}`;
let newTag = convertor("img");
console.log(newTag);
