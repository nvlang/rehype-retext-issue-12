import rehypeParse from 'rehype-parse';
import rehypeRetext from 'rehype-retext';
import rehypeStringify from 'rehype-stringify';
import retextEnglish from 'retext-english';
import { unified } from 'unified';

const file = await unified()
  .use(rehypeParse)
  .use(
    rehypeRetext,
    unified()
      .use(retextEnglish) 
  )
  .use(rehypeStringify)
  .process('...');

console.log(file); 
