function getFirstSelector(selector){
  var element = document.querySelector(selector);
  return(element);
}
function nestedTarget(){
  var element = document.querySelector(`#nested .target`);
  return element;
} 
function increaseRankBy(n){
  var ranks = document.querySelectorAll(`ul.ranked-list li`);
  for(var i = 0; ranks.length>i; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}
function deepestChild(){
 
const grandNode = document.getElementById(`grand-node`).querySelectorAll(`div`);
const deepest = grand-node[grand-node.length - 1];
return deepest;
}