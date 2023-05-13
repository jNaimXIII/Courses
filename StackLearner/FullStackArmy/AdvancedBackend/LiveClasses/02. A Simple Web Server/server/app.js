const fs = require("fs");
const http = require("http");

const PORT = 42069;

const routes = {
  "/": {
    GET: (_, response) => {
      sendResponse(response, { body: { message: "Soup!" } });
    },
  },
  "/students": {
    GET: (_, response) => {
      const db = JSON.parse(fs.readFileSync("./db.json"));

      sendResponse(response, { body: { students: db.students } });
    },
    POST: (request, response) => {
      let body = "";
      request.on("data", (chunk) => (body += chunk));
      request.on("end", () => {
        const payload = JSON.parse(body);

        const db = JSON.parse(fs.readFileSync("./db.json"));
        const students = db.students;

        const latestStudentId = students[students.length - 1]?.id || 0;
        const newStudent = {
          ...payload,
          id: latestStudentId + 1,
        };
        students.push(newStudent);

        fs.writeFileSync("./db.json", JSON.stringify(db));

        sendResponse(response, {
          body: { message: "success", data: newStudent },
        });
      });
    },
  },
  default: (_, response) => {
    sendResponse(response, {
      status: 404,
      body: { message: "not found" },
    });
  },
  invalid: (_, response) => {
    sendResponse(response, {
      status: 405,
      body: { message: "invalid method" },
    });
  },
};

// const server = http.createServer(handler);
const server = http.createServer((request, response) => {
  console.log("generating response");

  const { method, url } = request;

  const currentRoute = routes[url];
  if (!currentRoute) return routes.default(request, response);

  const currentMethod = currentRoute[method];
  if (!currentMethod) return routes.invalid(request, response);

  currentMethod(request, response);
});

server.listen(PORT, () => {
  console.log("listening on port", PORT);
});

function sendResponse(
  response,
  { contentType = "application/json", status = 200, body = {} }
) {
  response.statusCode = status;
  response.writeHead(200, { "Content-Type": contentType });
  response.write(JSON.stringify(body));
  response.end();
}
