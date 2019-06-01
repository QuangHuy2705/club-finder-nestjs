    
import { Connection } from 'mongoose';
import { PostSchema } from './schemas/post.schema';

export const catsProviders = [
  {
    provide: 'POST_MODEL',
    useFactory: (connection: Connection) => connection.model('Cat', PostSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];