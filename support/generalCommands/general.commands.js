class generalCommands {
    // Login
    async login(page, request) {
        let revisionKey = "";

        const response = await request.post(process.env.TOKEN_URL, {
            data: {
                "grant_type": "basic",
                "client_type": "user",
                "username": process.env.TESTUSER_USERNAME,
                "password": process.env.TESTUSER_PASSWORD
            }
        });
        let responseJSON = await response.json();
        let tokenValue = responseJSON.access_token;

        await page.evaluate(tokenValue => localStorage.setItem('access-token', tokenValue), tokenValue)

        if (!revisionKey) {
            await page.goto(process.env.BASE_URL)
        } else {
            await page.goto(process.env.BASE_URL + '/?revision=' + revisionKey)
        }
    }
}

module.exports = new generalCommands()