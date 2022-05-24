/* eslint-disable no-console */
const jsonServer = require('json-server');
const path = require('path');
const multer = require('multer'); //обработка файла на стороне сервера
const fs = require("fs");

const pathToSave = 'public/uploads';
const urlBase = '/uploads/';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(path.join(__dirname, pathToSave))) {
      fs.mkdirSync(path.join(__dirname, pathToSave));
    }
    cb(null, path.join(__dirname, pathToSave));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = path.win32.basename(file.originalname, ext);
    cb(null, `${name}-${Date.now()}${ext}`);
  }
});

const upload = multer({ storage }); // инициализация

const getErrors = (errorsToSend) => {
  let errors = [];
  if (errorsToSend && Array.isArray(errorsToSend)) {
    errors = [...errorsToSend];
  }

  return {
    errors
  };
};

const getError = (title, detail, status, pathToAttribute) => {
  let errors = [];
  errors.push({
    title,
    detail,
    status,
    source: pathToAttribute ? { pointer: pathToAttribute } : null
  });

  return getErrors(errors);
};

const server = jsonServer.create()
const router = jsonServer.router('./tests/test-data/db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post("/FileUpload", upload.any(), function (req, res) {

  let filedata = req.files;

  if (!filedata) {
    res.status(500).json(getError('File upload', 'Error during file upload', 500, null));
  }
  else {
    res.status(201).json({ filename: filedata[0].filename });
  }
});

server.post('/saveURL', function (req, res) {
  const entityId = req.body.id;
  const entityName = req.body.entityName;
  const fileName = req.body.fileName;

  const db = router.db; //lowdb instance
  const book = db.get(entityName).find({ id: entityId }).assign({ cover_url: `${urlBase}${fileName}` }).write();

  // const book = db.get(entityName).find({ id: entityId }).assign({ coverURL: `${urlBase}${fileName}` }).write();
  res.status(200).json(book);
});

//delete record begin

function responseInterceptor(req, res, next) {
  var originalSend = res.send;

  res.send = function() {
    let body = arguments[0];

    if (req.method === 'DELETE') {
      let urlSegms = req.url.split('/');
      let idStr = urlSegms[urlSegms.length - 1];
      let id = parseInt(idStr);
      id = isNaN(id) ? idStr : id;

      let newBody = Object.assign({}, JSON.parse(body));
      newBody.id = id;
      arguments[0] = JSON.stringify(newBody);
    }

    originalSend.apply(res, arguments);
  };

  next();
}

server.use(responseInterceptor);
//delete record end

server.use((request, response, next) => {
  const speaker = Number(request.query.speaker);
  const book = Number(request.query.book);

  if (request.method === 'GET' && request.path === '/meetings' && !Number.isNaN(speaker)) {

    const arr = router.db.get('reports').filter(report => report.speakerId === speaker).value();
    const mapArr = arr.map(report => report.meetingId);
    const newMeetings = router.db.get('meetings').filter( meeting => mapArr.some(el => meeting.id === el)).value();
    newMeetings.forEach((newMeeting) =>newMeeting.reports = router.db.get('reports').filter((report) => report.meetingId === newMeeting.id));


    response.json(newMeetings);
  } else if (request.method === 'GET' && request.path === '/meetings' && !Number.isNaN(book)) {

    const arr = router.db.get('reports').filter(report => report.bookId === book).value();
    const mapArr = arr.map(report => report.meetingId);
    const newMeetings = router.db.get('meetings').filter( meeting => mapArr.some(el => meeting.id === el)).value();
    newMeetings.forEach((newMeeting) =>newMeeting.reports = router.db.get('reports').filter((report) => report.meetingId === newMeeting.id));

    response.json(newMeetings);
  } else {
    next();
  }
});

// Use default router
server.use(router)

let port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`);
})


