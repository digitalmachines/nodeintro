// import express from 'express'; // es2015 modules, we're not using them
const express = require('express'); // similar to above, but works in all node versions

const server = express(); 

const port = 5000; 

server.listen(port, () => console.log(`\n== Server listening on port ${port} ==\n`))
// Server Listener
//server.listen(PORT, () => console.log(`--- listening on ${PORT} ---`));

let hubs = [
    {
        "id": 1, 
        "name": "web28", 
        lessonId: 1, 
        cohort: "web 28", 
    },
    {
        "id": 2, 
        "name": "web28", 
        lessonId: 1, 
        cohort: "web 28", 
    },		
    {
        "id": 3, 
        "name": "web28", 
        lessonId: 1, 
        cohort: "web 28", 
    },
];

// Middleware
server.use(express.json());// ENDPOINTS// retrieve lessons // teaches the server to parse JSON from the body

server.get("/api/lessons", (req, res) => {
    res.json(lessons);
});

// endpoints
server.get("/", (req, res) => {
    res.json({api: "running......." });
});

server.get('/api/hubs', (req, res) => {
    res.json(hubs);
});

// Create Post
server.post('/api/lessons', (req, res) => {
    const lessonInfo = req.body;  lessons.push(lessonInfo)
    res.status(201).json(lessons) // 201 status shows a successful post create
  })

// Dynamic ID's
server.get("/api/hubs/:id", (req, res) => {
    const id = req.params.id; 

    const hub = hubs.find((hub) => hub.id == id);

    if(hub) { 
        res.status(200).json(hub);
    } else {
        res.status(404).json({ message: 'Lesson not found' });
    }
})