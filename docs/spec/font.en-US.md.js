webpackJsonp([84],{1911:function(e,t){e.exports={content:["article",{},["h2","Font Family"],["p","In order to implement a good font system, the first thing is to choose an appropriate font family. Ant Design prefers the system default font family and then also provides a set of alternative font libraries to maintain readability for screens on different platforms and browsers and to make sure it's always user friendly, stable and professional to end user."],["pre",{lang:"css",highlighted:'<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Chinese Quote"</span>, -apple-system, BlinkMacSystemFont, <span class="token string">"Segoe UI"</span>, <span class="token string">"PingFang SC"</span>, <span class="token string">"Hiragino Sans GB"</span>, <span class="token string">"Microsoft YaHei"</span>, <span class="token string">"Helvetica Neue"</span>, Helvetica, Arial, sans-serif,\n <span class="token string">"Apple Color Emoji"</span>, <span class="token string">"Segoe UI Emoji"</span>, <span class="token string">"Segoe UI Symbol"</span><span class="token punctuation">;</span>'},["code",'font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif,\n "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";']],["blockquote",["p","References\uff1a",["a",{title:null,href:"https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/"},"https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/"]," and ",["a",{title:null,href:"http://markdotto.com/2018/02/07/github-system-fonts/"},"http://markdotto.com/2018/02/07/github-system-fonts/"]]],["p","In addition, in a lot of applications, numbers often need to be displayed vertically. We set the CSS property ",["code","font-variant-numeric"]," to ",["code","tabular-nums;"]," to use ",["a",{title:null,href:"https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures"},"tabular figures"],"."],["blockquote",["p","References\uff1a",["a",{title:null,href:"https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage#comment78509178_32660790"},"https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage#comment78509178_32660790"]]],["h2","Base Font Size"],["p","We have updated Ant Design's base font size from the original 12 to 14 to ensure the best user reading efficiency on most common monitors based on display screen reading distance (50 cm) and optimal reading angle (0.3)."],["div",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/yriUFbqOPtVniYYiikfb.png"}]],["h2","Font Scale & Line Height"],["p","The font scale and line height determine the beauty of the dynamics and order of a font system. Font scale refers to a series of font with different sizes. Line height can be understood as an invisible box wrapped outside the font."],["div",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/xpykKKFJQorFJltdXkie.png"}]],["p","Ant Design was inspired by the pentatonic scale and natural law to define 10 different font sizes and corresponding line heights."],["div",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/iFjgfIBExksqCqGMwUlw.png"}]],["p","In Ant Design's visual system, our recommended base font size is 14, and its corresponding line height is 22. The choice of the rest of the font scale can be freely defined according to the specific circumstances. It is recommended that in a design system (except for display pages), the choice of font scale should be controlled within 3 to 5 types, and the principle of restraint should be maintained."],["h2","Font Weight"],["p","The choice of font weight is also based on the principles of order, stability, and restraint. In most cases, just regular(400) and medium(500) should be enough. In the case of bold English words, semibold(600) could be used."],["div",{class:"font-samples"},["div",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/orIVrEOZIpjMbqZGiXEi.png"}]],["div",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/sasWhUzTGjlZKftukraH.png"}]],["div",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/QqxifAZlISrSUwnlonyx.png"}]]],["style","\n.font-samples {\n  display: flex;\n}\n"],["h2","Font Color"],["p","Text will be difficult to read if it is too close to the background color. To achieve barrier-free design, we follow the WCAG standard, which maintains an AAA level of contrast ratio, i.e. 7:1 or more between body text, title, and background color."],["div",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/jPbEabWakVQHosHxhQPR.png"}]],["h2","Advanced Tips"],["p",'The construction of the font system is the first step to achieve "the beauty of dynamic order". In practical design, we have three more advanced tips\uff1a'],["ol",["li",["p",["strong","Establish a systematic design thinking:"],"\nIn the UI design of the same system, a systematic design thinking should be first established. The primary, secondary, auxiliary, title, display, and other types of fonts are planned in a unified manner. And then make any necessary fine tuning according to the specific situation. The establishment of a systematic design approach helps to increase the consistency of horizontal font landing, improve the cost-effectiveness of font uses, and avoid unnecessary style waste."]],["li",["p",["strong","Less is more\uff1a"],"Visual design should be achieved with as few styles as possible. Avoid meaningless use of large numbers of font scales, colors, and font weight to emphasize visual or contrast relationships."]],["li",["p",["strong","Try to make font scale dance like a note"],"\nWhen you need to expand any gap, you can try to choose the size of the font to jump in the font scale table, which will create a subtle rhythm between the word scales."]]]],meta:{category:"Visual",order:3,title:"Font",filename:"docs/spec/font.en-US.md"},description:["section",["p","Font is one of the most basic foundational part of a interface design system."],["p",'Text is the major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user\'s reading experience and work efficiency. The Ant Design typography system is based on the design principle of "dynamic order" combined with the law of natural logarithm and temperament. We strongly recommend it since it has been verified by a large number of Ant products.\nWhile defining the font system for a visual system, we propose to start from the following five aspects:'],["ol",["li",["p","Font Family"]],["li",["p","Base Font Size"]],["li",["p","Font Scale & Line Height"]],["li",["p","Font Weight"]],["li",["p","Font Color"]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Font-Family",title:"Font Family"},"Font Family"]],["li",["a",{className:"bisheng-toc-h2",href:"#Base-Font-Size",title:"Base Font Size"},"Base Font Size"]],["li",["a",{className:"bisheng-toc-h2",href:"#Font-Scale-&-Line-Height",title:"Font Scale & Line Height"},"Font Scale & Line Height"]],["li",["a",{className:"bisheng-toc-h2",href:"#Font-Weight",title:"Font Weight"},"Font Weight"]],["li",["a",{className:"bisheng-toc-h2",href:"#Font-Color",title:"Font Color"},"Font Color"]],["li",["a",{className:"bisheng-toc-h2",href:"#Advanced-Tips",title:"Advanced Tips"},"Advanced Tips"]]]}}});