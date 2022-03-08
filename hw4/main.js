const src = document.querySelector('.src-text');
const dist = document.querySelector('.dist-text');
const dist2 = document.querySelector('.dist-text2');
let srcText = `
One: 'Hi Mary.' <br>
Two: 'Oh, hi.' <br>
One: 'How are you doing?' <br>
Two: 'I'm doing alright. How about you?' <br>
One: 'Not too bad. The weather is great isn't it?' <br>
Two: 'Yes. It's absolutely beautiful today.' <br>
One: 'I wish it was like this more frequently.' <br>
Two: 'Me too.' <br>
One: 'So where are you going now?' <br>
Two: 'I'm going to meet a friend of mine at the department store.' <br>
One: 'Going to do a little shopping?' <br>
Two: 'Yeah, I have to buy some presents for my parents.' <br>
One: 'What's the occasion?' <br>
Two: 'It's their anniversary.' <br>
One: 'That's great. Well, you better get going. You don't want to be late.' <br>
Two: 'I'll see you next time.' <br>
One: 'Sure. Bye.' <br>
`;

src.insertAdjacentHTML('beforeend', srcText);

const regexp = /\'/g;
const regexp2 = /(\s\')|(\'\s)/gm;
const distText = srcText.replace(regexp, '\"');
const distText2 = srcText.replace(regexp2, ' \"');
dist.insertAdjacentHTML('afterbegin', distText);
dist2.insertAdjacentHTML('afterbegin', distText2);
