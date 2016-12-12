function addLoadEvent(func) { // Ϊload�¼������Ӧ����
    var curonload = window.onload; // ���浱ǰ��load�¼���Ӧ����
    if(typeof curonload != 'function') { // �����ǰ��load�¼���Ӧ���������Ͳ���function�Ļ�����û�а��κ�load�¼���Ӧ�����Ļ���
        window.onload = func; // ��func�ﶨΪload�¼�����Ӧ������
    } else { //����,
        window.onload = function() { // Ϊload�¼����µ���Ӧ�������䶨�����£�
            curonload(); //��ǰ��load�¼���Ӧ����
            func(); // ����ӵ�load�¼���Ӧ����
        }
    }
}

//DOMû���ṩinsertAfter()����
function insertAfter(newElement, targetElement){
var parent = targetElement.parentNode;
if (parent.lastChild == targetElement) {
// ������Ľڵ���Ŀ��Ԫ�أ���ֱ����ӡ���ΪĬ�������
parent.appendChild(newElement);
}
else {
parent.insertBefore(newElement, targetElement.nextSibling);
//������ǣ��������Ŀ��Ԫ�ص���һ���ֵܽڵ� ��ǰ�档Ҳ����Ŀ��Ԫ�صĺ���
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
            showPic(this); // ��placeholder����ʾͼƬ
            return false; // ����false��ֹҳ����ת
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

