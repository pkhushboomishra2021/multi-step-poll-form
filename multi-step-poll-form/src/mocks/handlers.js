
import { rest } from 'msw';

export const handlers = [
  rest.post('/api/submit', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'Poll submitted' }));
  }),
];
