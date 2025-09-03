import User from "#app/models/user.js";
import Post from "#app/models/post.js";

await User.sync({ alter: true });
await Post.sync({ alter: true });