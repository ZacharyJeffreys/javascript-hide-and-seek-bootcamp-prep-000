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
  
  const lis = document.getEl
  
  var grand = document.querySelectorAll(`div#grand-node`)
}