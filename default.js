var videos = [
  {
    name: 'Game Theory: The Hunt for Super Smash Bros. LOST STAGE!',
    url: 'https://youtu.be/8WAsQKcJ_Xo',
    embed: 'https://www.youtube.com/embed/8WAsQKcJ_Xo',
    tags: ['video games', 'games', 'educational', 'theory'],
    comments: [
      'This was funny',
      'Very interesting',
      'SMASH BROS!'],
    },
    {
      name: 'Film Theory: How to KILL X-Mens Magneto!',
      url: 'https://youtu.be/YTbeRTH7jkg',
      embed: ['https://www.youtube.com/v/YTbeRTH7jkg'],
      tags: ['film', 'x-men', 'magneto', 'movie', 'theory', 'marvel'],
      comments: [
        'LOL',
        'Magneto is a glass cannon',
        'oh well'
      ],
    },
    {
      name: 'Film Theory: Rick\'s True Crime EXPOSED!',
      url: 'https://youtu.be/5dZAGFKhUFY',
      embed: 'https://www.youtube.com/embed/5dZAGFKhUFY',
      tags: ['film', 'theory', 'rick and morty', 'funny', 'theory'],
      comments: [
        'Mind blown!',
        'I love rick and morty!',
        'LOL'
      ],
    },
    {
      name: 'Dark Souls III: Pyromania - PART 1 - Game Grumps',
      url: 'https://youtu.be/Zk2wuSJOjCs',
      emebed: 'https://www.youtube.com/embed/Zk2wuSJOjCs',
      tags: ['game', 'grumps', 'funny', 'dark souls'],
      comments: [
        'Dark souls is so hard',
        'I wish I had friends',
        'Funny joke'
      ],
    },
    {
      name: 'Top 10 NEW Games of June 2016',
      url: 'https://youtu.be/88xS3RdFB80',
      tags: ['game', 'top', '2016'],
      comments: [
        'I can\'t wait!',
        'When do these come out?',
        'Where is my dog?'
      ],
    },
    {
      name: 'How to Stay Calm When You Know You\'ll Be Stressed | Daniel Levitin | TED Talks',
      url: 'https://youtu.be/8jPQjjsBbIc',
      emebed: 'https://www.youtube.com/embed/8jPQjjsBbIc',
      tags: ['lifehack', 'ted talks', 'educational', 'stress relief'],
      comments: [
        'Glad I found this',
        'My parents were right!',
        'I found my dog'
      ],
    },
    {
      name: 'Accelerated Learning: How To Get Good at Anything in 20 Hours',
      url: 'https://youtu.be/lB6K60mkmho',
      embed: 'https://www.youtube.com/embed/lB6K60mkmho',
      tags: ['lifehack', 'educational'],
      comments: [
        'Woah',
        'Wow',
        'Can\'t wait to try this'
      ],
    },
    {
      name: '$682 Hackintosh Mac Mini vs. $1,300 Apple Mac Mini',
      url: 'https://youtu.be/aZU9KD2YESQ',
      embed: 'https://www.youtube.com/embed/aZU9KD2YESQ',
      tags: ['computer', 'tech', 'mac', 'educational'],
      comments: [
        'I want to build one!',
        'Mac\'s for the win',
        'w00t, 1337 hax0rz',
      ],
    },
    {
      name: 'How-To: build a Hackintosh: software installation',
      url: 'https://youtu.be/HbUAYCSEjQA',
      embed: 'https://www.youtube.com/embed/HbUAYCSEjQA',
      tags: ['hackintosh', 'educational', 'tech', 'computers'],
      comments: [
        'Sweet!',
        'Now I don\'t have to spend money!',
        'w00t!'
      ],
    },
    {
      name: 'X-Men: Apocalypse Easter Eggs You Missed',
      url: 'https://youtu.be/l32YPlm1sqo',
      embed: 'https://www.youtube.com/embed/l32YPlm1sqo',
      tags: ['x-men', 'easter eggs', 'movie', 'new'],
      comments: [
        'wow!',
        'I did not see that!',
        'So cool!!'
      ],
    },
    {
      name: 'How Strong is the Hulk?',
      url: 'http://youtu.be/crynw8hb1tg',
      embed: 'https://www.youtube.com/embed/crynw8hb1tg',
      tags: ['hulk', 'marvel', 'the avengers', 'comics'],
      comments: [
        'Incredible!',
        'hulk vs spiderman?',
        'when does the new movie come out?'
      ],


    }
  ];

  var button = document.getElementById('searchbutton');
  button.addEventListener('click', function(theEvent) {
    var term = document.getElementById('input');
    var theVideos = find(term.value, videos);
    show(theVideos)
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


//shows videos with thumbnails when searching for tag name
  function show(videos) {
    var results = document.getElementById('player');
    for (var i = 0; i < videos.length; i++) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', videos[i].embed);
      results.appendChild(iframe);


    }

  }






//var item = document.createElement('div');
//item.setAttribute('class', 'col-xs-6');
//item.textContent = (videos[i].name);
//results.appendChild(item);




}

}
