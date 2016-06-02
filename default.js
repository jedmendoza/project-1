var videos = [
  {
    name: 'Game Theory: The Hunt for Super Smash Bros. LOST STAGE!',
    url: 'https://img.youtube.com/vi/8WAsQKcJ_Xo/default.jpg',
    embed: 'https://www.youtube.com/v/8WAsQKcJ_Xo',
    tags: ['video games', 'games', 'educational', 'theory','all'],
    comments: [
      'This was funny',
      'Very interesting',
      'SMASH BROS!'],
    },
    {
      name: 'Film Theory: How to KILL X-Mens Magneto!',
      url: 'https://youtu.be/YTbeRTH7jkg',
      embed: ['https://www.youtube.com/v/YTbeRTH7jkg'],
      tags: ['film', 'x-men', 'magneto', 'movie', 'theory', 'marvel','all'],
      comments: [
        'LOL',
        'Magneto is a glass cannon',
        'oh well'
      ],
    },
    {
      name: 'Film Theory: Rick\'s True Crime EXPOSED!',
      url: 'https://youtu.be/5dZAGFKhUFY',
      embed: 'https://www.youtube.com/v/5dZAGFKhUFY',
      tags: ['film', 'theory', 'rick and morty', 'funny', 'theory','all'],
      comments: [
        'Mind blown!',
        'I love rick and morty!',
        'LOL'
      ],
    },
    {
      name: 'Dark Souls III: Pyromania - PART 1 - Game Grumps',
      url: 'https://youtu.be/Zk2wuSJOjCs',
      emebed: 'https://www.youtube.com/v/Zk2wuSJOjCs',
      tags: ['game', 'grumps', 'funny', 'dark souls','all'],
      comments: [
        'Dark souls is so hard',
        'I wish I had friends',
        'Funny joke'
      ],
    },
    {
      name: 'Top 10 NEW Games of June 2016',
      url: 'https://youtu.be/88xS3RdFB80',
      tags: ['game', 'top', '2016','all'],
      comments: [
        'I can\'t wait!',
        'When do these come out?',
        'Where is my dog?'
      ],
    },
    {
      name: 'How to Stay Calm When You Know You\'ll Be Stressed | Daniel Levitin | TED Talks',
      url: 'https://youtu.be/8jPQjjsBbIc',
      emebed: 'https://www.youtube.com/v/8jPQjjsBbIc',
      tags: ['lifehack', 'ted talks', 'educational', 'stress relief','all'],
      comments: [
        'Glad I found this',
        'My parents were right!',
        'I found my dog'
      ],
    },
    {
      name: 'Accelerated Learning: How To Get Good at Anything in 20 Hours',
      url: 'https://youtu.be/lB6K60mkmho',
      embed: 'https://www.youtube.com/v/lB6K60mkmho',
      tags: ['lifehack', 'educational','all'],
      comments: [
        'Woah',
        'Wow',
        'Can\'t wait to try this'
      ],
    },
    {
      name: '$682 Hackintosh Mac Mini vs. $1,300 Apple Mac Mini',
      url: 'https://youtu.be/aZU9KD2YESQ',
      embed: 'https://www.youtube.com/v/aZU9KD2YESQ',
      tags: ['computer', 'tech', 'mac', 'educational','all'],
      comments: [
        'I want to build one!',
        'Mac\'s for the win',
        'w00t, 1337 hax0rz',
      ],
    },
    {
      name: 'How-To: build a Hackintosh: software installation',
      url: 'https://youtu.be/HbUAYCSEjQA',
      embed: 'https://www.youtube.com/v/HbUAYCSEjQA',
      tags: ['hackintosh', 'educational', 'tech', 'computers','all'],
      comments: [
        'Sweet!',
        'Now I don\'t have to spend money!',
        'w00t!'
      ],
    },
    {
      name: 'X-Men: Apocalypse Easter Eggs You Missed',
      url: 'https://youtu.be/l32YPlm1sqo',
      embed: 'https://www.youtube.com/v/l32YPlm1sqo',
      tags: ['x-men', 'easter eggs', 'movie', 'new','all'],
      comments: [
        'wow!',
        'I did not see that!',
        'So cool!!'
      ],
    },
    {
      name: 'How Strong is the Hulk?',
      url: 'http://youtu.be/crynw8hb1tg',
      embed: 'https://www.youtube.com/v/crynw8hb1tg',
      tags: ['hulk', 'marvel', 'the avengers', 'comics','all'],
      comments: [
        'Incredible!',
        'hulk vs spiderman?',
        'when does the new movie come out?'
      ],


    }
  ];

  //Clicking on search button displays results on page
  var button = document.getElementById('searchbutton');
  button.addEventListener('click', function(theEvent) {
    var term = document.getElementById('input');
    var theVideos = find(term.value, videos);
    showThumbnails(theVideos);

  });






  //Search for videos using tags
  function find(tags) {
    var suggestions = [];
    videos.forEach(function(video) {
      if (video.tags.indexOf(tags) !== -1) {
        suggestions.push(video)
      }

    });
    return suggestions;
  }


  function showThumbnails(videos) {
    var results = document.getElementById('thumbs');
    for (var i = 0; i < videos.length; i++) {
      var iframe = document.createElement('iframe');
      //var buttons = document.createElement('button');
      iframe.setAttribute('src', videos[i].embed);
      //buttons.setAttribute('src', videos[i].embed, 'class', 'embed-responsive-item');
      results.appendChild(iframe);


    }

  }



  /*function fullScreen(videos) {
    var results = document.getElementById('large');
    for (var i = 0; i < videos.length; i++) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', videos[i].embed, 'class', 'embed-responsive-item');
      results.appendChild(iframe);
      document.createElement('button');

    }
}*/
