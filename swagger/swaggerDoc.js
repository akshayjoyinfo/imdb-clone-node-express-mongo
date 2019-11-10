import { serve, setup } from 'swagger-ui-express';

import swaggerDocument from '../doc.json';

export default (app) =>{
  app.use('/api-docs', serve , setup(swaggerDocument));
}
