function addLoadEvent(func) { // 为load事件添加响应函数
    var curonload = window.onload; // 保存当前的load事件响应函数
    if(typeof curonload != 'function') { // 如果当前的load事件响应函数的类型不是function的话，即没有绑定任何load事件响应函数的话，
        window.onload = func; // 则将func帮定为load事件的响应函数。
    } else { //否则,
        window.onload = function() { // 为load事件绑定新的响应函数，其定义如下：
            curonload(); //当前的load事件响应函数
            func(); // 新添加的load事件响应函数
        }
    }
}

//DOM没有提供insertAfter()方法
function insertAfter(newElement, targetElement){
var parent = targetElement.parentNode;
if (parent.lastChild == targetElement) {
// 如果最后的节点是目标元素，则直接添加。因为默认是最后
parent.appendChild(newElement);
}
else {
parent.insertBefore(newElement, targetElement.nextSibling);
//如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
}
}

function preparePlaceholder()
{   
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;

    var placeholder = document.createElement("img");
	placeholder.setAttribute("src","images/dom.jpg");
    placeholder.setAttribute("alt","papapa");
	placeholder.setAttribute("id","placeholder");

	var descreption = document.createElement("p");
    descreption.setAttribute("id","description")

	var desctext = document.createTextNode("Wtf");
    descreption.appendChild(desctext);

	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
    insertAfter(descreption,placeholder);
}
function prepareGallery() 
{
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;

	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
    for (i=0; i<links.length ; i++ )
    {
        links[i].onclick = function() 
        {
            showPic(this); // 在placeholder中显示图片
            return false; // 返回false防止页面跳转
         }
		 links[i].onkeypress = links[i].onclick;
	 }
}

function showPic(whichPic)
{  
   if (!document.getElementById("placeholder")) return true;
   var source = whichPic.getAttribute("href");
   var placeholder = document.getElementById("placeholder");
   placeholder.setAttribute("src",source);
   if (!document.getElementById("description")) return false;
  
   var titletext = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
   var description = document.getElementById("description");
   if (description.firstChild.nodeType == 3) 
   {
       description.firstChild.nodeValue = titletext;
   }
   return false;
}

/*function popUp(winURL)
{
     window.open(winURL,"popup","width= 300px, height= 500px")
}*/


/*window.onload = function prepareLinks()
{  
   if (!document.getElementsByTagName) return false;
   var link = document.getElementsByTagName("a");
   for (i=0; i<link.length ; i++ )
   {
       if (link[i].getAttribute("class") == "popup")
       {
           function popUp(link[i].getAttribute("href"));
		   return false ;
       }   
	}
}*/

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

