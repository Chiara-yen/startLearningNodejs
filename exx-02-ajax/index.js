var request = require('superagent');
var cheerio = require('cheerio');

var keyword = document.getElementById('keyword');
var btn = document.getElementById('search-btn');
var result = document.getElementById('result');

btn.addEventListener('click', function() {
  var val = keyword.value;
  request
    .get('https://github.com/' + val)
    .end(function(err, res) {
      if (!res.ok) return;
      result.innerHTML = '';

      var $ = cheerio.load(res.text);

      var fullname = $('.vcard-fullname').text();
      var username = $('.vcard-username').text();
      var avatar = $('.avatar').attr('src');
      var counts = $('.vcard-stats').find('.vcard-stat-count');
      var followers = counts.eq(0).text();
      var starred = counts.eq(1).text();
      var following = counts.eq(2).text();

      console.log(fullname, username, avatar, followers, starred, following);

      var title = document.createElement('h2');
      title.innerHTML += fullname;

      var subtitle = document.createElement('h4');
      subtitle.innerHTML += username;
      subtitle.style.color = 'gray';

      var image = document.createElement('img');
      image.src = avatar;

      var fer = document.createElement('p');
      fer.innerHTML += 'followers: ';
      fer.innerHTML += followers;
      fer.style.color = 'red';

      var sta = document.createElement('p');
      sta.innerHTML += 'starred: ';
      sta.innerHTML += starred;
      sta.style.color = 'green';

      var fing = document.createElement('p');
      fing.innerHTML += 'followers: ';
      fing.innerHTML += followers;
      fing.style.color = 'blue';

      result.appendChild(title);
      result.appendChild(subtitle);
      result.appendChild(image);
      result.appendChild(fer);
      result.appendChild(sta);
      result.appendChild(fing);

    });

});
