import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
<h3 align="left">  🏷️ Career  </h3>
<h5 align="left"> 

  
<br/>
<h3 align="center"><b>🛠 languages and tool 🛠</b></h3>
<p align="center">
  <img src="https://img.shields.io/badge/Swift-E34F26?style=flat-square&logo=Swift&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a> &nbsp
 <img src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=Dart&logoColor=white"/></a> &nbsp
     <img src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=Flutter&logoColor=white"/></a> &nbsp
      <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=C++&logoColor=white"/></a> &nbsp
        <img src="https://img.shields.io/badge/C-A8B9CC?style=flat&logo=C&logoColor=white"/></a> &nbsp
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a> &nbsp
        <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/></a> &nbsp
          
        
   
  
</p>


## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://thisissolmi.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href="${link}">${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();
