const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const zod = require('zod');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const users = [];

// Generate a random secret key for production
const secretKey = 'your_secret_key';

const userSchema = zod.object({
	username: zod.string().min(3).max(20),
	password: zod.string().min(6)
});

app.post('/signup', async (req, res) => {
	const { username, password } = req.body;

	// Validate input using zod
	const result = userSchema.safeParse({ username, password });
	if (!result.success) {
		return res.status(400).json({ error: result.error.issues[0].message });
	}

	// Check if username already exists
	const existingUser = users.find(user => user.username === username);
	if (existingUser) {
		return res.status(400).json({ error: 'Username already exists' });
	}

	// Hash the password for security
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create a new user
	const newUser = {
		username,
		password: hashedPassword
	};
	users.push(newUser);

	// Generate a JWT token
	const token = jwt.sign({ userId: newUser.username }, secretKey, { expiresIn: '1h' });

	res.status(201).json({ token });
});

app.post('/signin', async (req, res) => {
	const { username, password } = req.body;

	// Validate input using zod
	const result = userSchema.safeParse({ username, password });
	if (!result.success) {
		return res.status(400).json({ error: result.error.issues[0].message });
	}

	// Find the user
	const user = users.find(user => user.username === username);
	if (!user) {
		return res.status(401).json({ error: 'Invalid username or password' });
	}

	// Verify the password
	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		return res.status(401).json({ error: 'Invalid username or password' });
	}

	// Generate a JWT token
	const token = jwt.sign({ userId: user.username }, secretKey, { expiresIn: '1h' });

	res.status(200).json({ token });
});

app.get('/protected', (req, res) => {
	const token = req.headers.authorization?.split(' ')[1];
	if (!token) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	try {
		const decoded = jwt.verify(token, secretKey);
		res.json({ message: 'Protected content', user: decoded.userId });
	} catch (error) {
		res.status(401).json({ error: 'Unauthorized' });
	}
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});