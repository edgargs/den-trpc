import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { AppRouter } from './router.ts';

const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:8000/trpc',
      }),
    ],
  });

async function main() {
    const greeting = await client.greeting.query('Deno');
    console.log(greeting);
}

main();
