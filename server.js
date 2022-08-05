import express from 'express';
import articleRouter from './routes/articles.js';

const app = express();

app.set('view engine', 'ejs');
app.use('/articles', articleRouter);
app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test article',
      createdAt: new Date(),
      description: 'Test deacription',
    },
    {
      title: 'Test2 article',
      createdAt: new Date(),
      description: 'Test2 deacription',
    },
  ];
  res.render('articles/index', { articles: articles });
});
app.listen(5001);
