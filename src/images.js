import jsonList from './links';

const images = [];
var index = 0;

for (var l in jsonList) {
  let link = jsonList[l];
  let newImg = {
    id: index,
    src: link.icon,
    title: link.name
  };
  images.push(newImg);
  index += 1;
}

export default images;
