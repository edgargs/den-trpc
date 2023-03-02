import { serve } from 'https://deno.land/std/http/server.ts';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter } from './router.ts';

function handler(request) {
    // Only used for start-server-and-test package that
    // expects a 200 OK to start testing the server
    if (request.method === 'HEAD') {
      return new Response();
    }
  
    return fetchRequestHandler({
      endpoint: '/trpc',
      req: request,
      router: appRouter,
      createContext: () => ({}),
    });
  }

serve(handler);