var videos =
[
  {
    name: 'Game Theory: The Hunt for Super Smash Bros. LOST STAGE!',
    url: 'https://img.youtube.com/vi/8WAsQKcJ_Xo/default.jpg',
    id: 1,
    embed: 'https://www.youtube.com/v/8WAsQKcJ_Xo',
    tags: ['video games', 'games', 'educational', 'theory','all'],
    comments: [ 'This was funny', 'Very interesting', 'SMASH BROS!'],
  },
  {
    name: 'Film Theory: How to KILL X-Mens Magneto!',
    url: 'https://youtu.be/YTbeRTH7jkg',
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
    embed: 'https://www.youtube.com/v/crynw8hb1tg',
    tags: ['hulk', 'marvel', 'the avengers', 'comics','all'],
    comments: [
      'Incredible!',
      'hulk vs spiderman?',
      'when does the new movie come out?'
    ]
  }
];

//Clicking on search button displays results on page
var videoResults = document.getElementById('searchbutton');
videoResults.addEventListener('click', function(theEvent) {
  var term = document.getElementById('input');
  var theVideos = find(term.value, videos);
  console.log(theVideos);
  theVideos.forEach(function(video) {
    var theElement = videoThumbnail(video);
    var section = document.getElementById('thumbnails');
    section.appendChild(theElement);
  });
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

function videoThumbnail(video) {
  var container = document.createElement('div');
  container.className = 'col-md-3';

  var thumbnail = document.createElement('div');
  thumbnail.className = 'embed-responsive embed-responsive-16by9'

  var embed = document.createElement('iframe');
  embed.className = 'embed-responsive-item';
  embed.setAttribute('src', video.embed);

  var button = document.createElement('button');
  button.className = 'col-md-12 btn btn-default enlarge';
  button.textContent = 'Enlarge';

  container.appendChild(thumbnail);
  container.appendChild(button);
  thumbnail.appendChild(embed);
  return container;
}

function swap(next, view) {
  var old = document.getElementsByClassName('current')[0];
  old.classList.remove('current');
  old.classList.add('hide');


  next.classList.add('current)');
  next.classList.remove('hide');

  view.appendChild(next);

  // Hide the current view.
  // Show the enlarged video video.
}

var theThumbnails = document.getElementById('thumbnails');
theThumbnails.addEventListener('click', function(theEvent) {
  //console.log(theEvent.target.className);

  var enlargedContainer = document.createElement('div');
  enlargedContainer.setAttribute('class', 'embed-responsive embed-responsive-16by9');
  //if(theEvent.target.className.indexOf('enlarge') !== -1) {

  /*var enlargedContainer = document.getElementById('enlarged');
  enlargedContainer.className = 'col-md-12 embed-responsive embed-responsive-16by9';*/

  var enlargedVideo = document.createElement('iframe');
  enlargedVideo.setAttribute('src', 'https://www.youtube.com/v/5dZAGFKhUFY');
  enlargedVideo.setAttribute('class', 'embed-responsive-item');
  //console.log(enlargedVideo);

  var largeVideoRow = document.getElementById('row hide');

  var commentStart =document.getElementById('commentbox');

  var commentDiv = document.createElement('div');
  commentDiv.className = 'col-md-5';

  var commentInput = document.createElement('textarea');
  commentInput.setAttribute('class', 'form-control');
  commentInput.setAttribute('rows', '3');
  commentInput.setAttribute('id', "comments")

  var buttonRow = document.getElementById('buttonrow');

  var submitComment = document.createElement('button');
  submitComment.setAttribute('type', 'submit');
  submitComment.setAttribute('class', 'btn btn-default');
  submitComment.setAttribute('value', 'Submit');
  submitComment.textContent = 'Submit Comment';

  enlargedContainer.appendChild(enlargedVideo);
  enlarged.appendChild(enlargedContainer);
  commentStart.appendChild(commentDiv);
  commentDiv.appendChild(commentInput);
  //commentDiv.appendChild(submitComment);
  buttonRow.appendChild(submitComment);
  // Create an enlarged video.
  // Append the large video to the enlarged view.
  swap(enlarged, view);
})
