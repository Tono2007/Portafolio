# h1 **titulo** grandee -#

## h2 **titulo** grandee

### h3 **titulo** grandee

#### h4 **titulo** grandee\n\n \n ...

##### h5 **titulo** grandee

###### h6 **titulo** grandee

## **Implementación**

### **Implementación**

#### **Implementación**

#### Implementación

##### Implementaciónlorem␠␠

ipsum

- [x] yet another
- [ ] to do

lorem\
ipsum

U+2029 &U+2029; &#8233; &#8233;

[Link with rel="noopener noreferrer"](https://github.com/remarkjs/react-markdown/issues/12)`

- [## **Twitch**](#codigo-especifico)
- [## Twitch](#codigo-especifico)
- [## Twitch](#codigo-especifico)
- [## Twitch](#codigo-especifico)
- [## Twitch](#codigo-especifico)

sdfdf \n \\\n \

p -> Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/><br/><br/> Autem ut deserunt repellat modi ss explicabo omnis officia, reprehenderit deleniti, fugiat quasi mollitia nesciunv\ velit estconsequatur amet eius vero voluptatum comm

odi! Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ratione nobis optio, dolor ea molestias \s\s ullam sequi omnis

<script>console.log("dfdfd")</script>

<h1>sdsds</h1>

p -> espacios y saltos del linea-> asi nó <br/> ni así \n -> usar **\&nbsp;**

Para saltos agregar dos espacios **\&nbsp;** **\&nbsp;** y enter &nbsp;&nbsp;

&nbsp;&nbsp;

&nbsp;&nbsp;

sds

&nbsp;

sfsdds &nbsp;&nbsp;

fsd

fsdfs **bold text** -> \*\*fdf\*\*

fsdfs _italic text_ -> \*fdf\*

fsdfs **_bold and italic text_** -> \*\*\*fdf\*\*\*

> Blockquotes -> \>Cita Dorothy followed her through many of the beautiful rooms in her castle.
>
> - Revenue was off the chart.
> - Profits were higher than ever.

> Anidar citasDorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood

## Codigo en linea

sdfsdf`> git init` comillas -> &nbsp;&nbsp;&nbsp; **\`> git init\`**

sdfsdf`> git init` Lorem ipsum dolor, sit amet consectetur adipisicing elit.`> git init` Autem ut deserunt repellat modi ss explicabo omnis officia, reprehenderit deleniti, `> git init` fugiat quasi mollitia nesciunv\ velit estconsequatur amet eius vero voluptatum comm

## Codigo especifico

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
    {'# Your markdown here'}
  </ReactMarkdown>,
  document.querySelector('#content'),
);
 <ReactMarkdown
          remarkPlugins={[[remarkGfm]]}
          rehypePlugins={[rehypeSlug]}
          components={{
            // eslint-disable-next-line react/no-unstable-nested-components
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <>
                  <SyntaxHighlighter
                    showLineNumbers
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')}
                    style={pris
```

## Crear y anidarListas

-sdsds  
-sdfsdf &nbsp; &nbsp;  
-ssd &nbsp;&nbsp;

- Revenue was off the chart.
- Revenue was off the chart.
- Revenue was off the chart.
  - Revenue was off the chart.
    > - Profits were higher than ever.
  - Revenue was off the chart.
- Revenue was off the chart.

## Imagenes

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')
\!\[alt text]\(https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

## Links

[Twitch](https://www.twitch.tv) entre texto [Twitch](https://www.twitch.tv) sfd

[Twitch](https://www.twitch.tv){name:value} l

\[Twitch]\(https://www.twitch.tv)

## Tablas

| Tables        |      Are      | rightalign | Cool |
| ------------- | :-----------: | ---------: | :--: |
| col 3 is      | right-aligned |          f |  f   |
| col 2 is      |   centered    |          f |  f   |
| zebra stripes |   are neat    |          f |  f   |

## Videos

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/oxaH9CFpeEE/0.jpg)](http://www.youtube.com/watch?v=oxaH9CFpeEE)

---

hr -> "---"
