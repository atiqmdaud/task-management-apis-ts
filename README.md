Task Management Apis - demo only

need MongoDB local server

to run:<br/>
node dist/server.js

Api url:<br/>
localhost:5000/api/


create Task: POST <br />
Endpoint: <br/>
localhost:5000/api/tasks <br />
Body: <br/>{"title":"title 1",
"description":"desc 1"}

get Tasks: GET <br />
Endpoint: <br/>
localhost:5000/api/tasks <br />

update Task: PUT <br />
Endpoint: <br/>
localhost:5000/api/tasks/id-here <br />
Body: <br/>{"title":"title updated 1",
"description":"desc updated 1",
"status":"In Progress"}

get Tasks by status: GET <br />
Endpoint: <br/>
localhost:5000/api/tasks/status/status-here <br />

delete Task: DELETE <br />
Endpoint: <br/>
localhost:5000/api/tasks/id-here <br />
