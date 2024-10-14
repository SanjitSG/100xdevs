import zod from 'zod';

const userSchema = zod.object({
  username: zod.string().min(3).max(20),
  password: zod.string().min(6)
});

export default userSchema;