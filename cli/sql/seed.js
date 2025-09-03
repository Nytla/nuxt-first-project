import Post from '#app/models/post.js';
import User from '#app/models/user.js'

const admin = await User.create({
	login: 'admin',
	password: '$2b$10$QLYMLdwwxhlwOkKuiB4KkuN/yNIReAHDXQnAPIysl8ZbaxlTx.qxi' 
	// bcrypt of word: password 
});

const manager =  await User.create({
	login: 'manager',
	password: '$2b$10$QLYMLdwwxhlwOkKuiB4KkuN/yNIReAHDXQnAPIysl8ZbaxlTx.qxi' 
	// bcrypt of word: password 
});

await Post.create({
	url: 'first',
	title: 'First Post',
	content: 'Post 4 test, some big content placed here',
	UserId: admin.id
});

await Post.create({
	url: 'second',
	title: 'Second Post',
	content: 'Second 4 test, some big content placed here',
	UserId: admin.id
});

await Post.create({
	url: '3',
	title: '3 Post',
	content: '3 4 test, some big content placed here',
	UserId: manager.id
});