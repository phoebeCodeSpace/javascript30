const url = "https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json";

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


search.addEventListener('input',match);


let  poetrys = [];  //存储诗集数组
fetch(url)
	.then(blob => blob.json())
	.then(data => poetrys=data)
  .catch(e => console.log("Oops, error", e));


function match(){
  const keyword = this.value;
  const reg = new RegExp(keyword, 'gi');    //正则匹配关键字
  let matchArr = findMatch(keyword,poetrys);

  console.table(matchArr);

  let html='';
  matchArr.forEach(poet=>{
    //设置高亮
    let detail_text = poet.detail_text.replace(reg,`<span class="hl">${ keyword }</span>`)
    let title = poet.title.replace(reg,`<span class="hl">${ keyword }</span>`)
    let detail_author = poet.detail_author.join(',').replace(reg,`<span class="hl">${ keyword }</span>`)

    html += `<li>
					<span class="poet">${detail_text}</span>
					<span class="title">${title} - ${detail_author}</span>
				</li>`
  })
  suggestions.innerHTML=html
}

function findMatch(keyword,poetrys){
  return poetrys.filter(poet=>{
    const reg = new RegExp(keyword, 'gi');    //正则匹配关键字
    const author = poet.detail_author.join(''); //把数组转化为字符串
    return poet.detail_text.match(reg) || poet.title.match(reg) || author.match(reg);
  })
}
