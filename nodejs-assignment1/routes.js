const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const users = ['Max', 'Adam', 'Gonze'];

    if (url === '/') {
        res.write('<html> Hi there </html>');
        res.write(`
                    <body>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username">
                        <button type="submit">Send</button>
                    </form>
                    </body>
        `);
        res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<ul>');
        users.forEach(user => {
            res.write(`<li>${user}</li>`);
        });
        res.write('</ul>');
        res.write('</html>');
        res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    
};


exports.requestHandler = requestHandler;