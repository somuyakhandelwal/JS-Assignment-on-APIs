let arr = [];

// Progression 1: create a function and fetch the api using axios
function getData() {
  const getBlog = document.getElementById('blog');

  axios
    .get(
      'https://gnews.io/api/v4/search?q=example&token=20272535ca1f753dbf1a5dae4438eca8&lang=en'
    )
    .then((res) => {
      const listOfArticles = res.data.articles;
      console.log(res.data.articles);

      listOfArticles.forEach((article) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const cardHeader = document.createElement('div');
        cardHeader.setAttribute('class', 'card-header');

        const img = document.createElement('img');
        img.setAttribute('src', article.image);
        cardHeader.append(img);

        const cardbody = document.createElement('div');
        cardbody.setAttribute('class', 'card-body');
        const title = document.createElement('h4');
        title.innerText = article.title;
        const content = document.createElement('p');
        content.innerText = article.content;
        cardbody.append(title);
        cardbody.append(content);
        const user = document.createElement('div');
        user.setAttribute('class', 'user');
        const userinfo = document.createElement('div');
        userinfo.setAttribute('class', 'user-info');

        const srcname = document.createElement('h5');
        srcname.innerText = article.source.name;
        const publishdate = document.createElement('small');
        publishdate.innerText = article.publishedAt;
        userinfo.append(srcname);
        userinfo.append(publishdate);
        user.append(userinfo);

        card.append(cardHeader);
        card.append(cardbody);
        card.append(user);

        arr.push(card);
      });

      arr.forEach((ele) => {
        getBlog.append(ele);
      });
    });
}

getData();
