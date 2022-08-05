import express from 'express';
import mongoose from 'mongoose';
import Article from './models/Artcile.js';
import articleRouter from './routes/articles.js';
import methodOverride from 'method-override';

const app = express();

mongoose.connect('mongodb://localhost/mongo-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: 'desc',
  });
  // const articles = [
  //   {
  //     title: 'Test article',
  //     createdAt: new Date(),
  //     description: 'Test deacription',
  //   },
  //   {
  //     title: 'Test2 article',
  //     createdAt: new Date(),
  //     description: 'Test2 deacription',
  //   },
  // ];
  res.render('articles/index', { articles: articles });
});
app.use('/articles', articleRouter);

app.listen(5001);
