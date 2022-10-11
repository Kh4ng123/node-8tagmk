const testHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test Page</title>
</head>
<body>
    <h1>Test Page</h1>
</body>
</html>
`;

const testPreview = {
  url: 'https://www.youtube.com/watch?v=MejbOFk7H6c',
  title: 'OK Go - Needing/Getting - Official Video - YouTube',
  siteName: 'YouTube',
  description:
    'Buy the video on iTunes: https://itunes.apple.com/us/album/needing-getting-bundle-ep/id508124847 See more about the guitars at: http://www.gretschguitars.com...',
  images: ['https://i.ytimg.com/vi/MejbOFk7H6c/maxresdefault.jpg'],
  mediaType: 'video.other',
  contentType: 'text/html; charset=utf-8',
  videos: [],
  favicons: [
    'https://www.youtube.com/yts/img/favicon_32-vflOogEID.png',
    'https://www.youtube.com/yts/img/favicon_48-vflVjB_Qk.png',
    'https://www.youtube.com/yts/img/favicon_96-vflW9Ec0w.png',
    'https://www.youtube.com/yts/img/favicon_144-vfliLAfaB.png',
    'https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico',
  ],
};

module.exports = { testHtml, testPreview };
