import { Xendit } from 'xendit-node';

// secretapikey = "xnd_development_FdJfZRUxasjOvfHJyJkKakL7Q0FsLYfzPdxirccowiHJnVIly0LO69SWwBoS5t5"

const xenditClient = new Xendit({
  secretKey: process.env.SECRET_API_KEY!,
})

export default xenditClient