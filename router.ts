import { initTRPC } from '@trpc/server';
 
const t = initTRPC.create();
 
const router = t.router;
const publicProcedure = t.procedure;
 
export const appRouter = router({
    greeting: publicProcedure
        .input((val: unknown) => {
            if (typeof val === 'string') return val;
            throw new Error(`Invalid input: ${typeof val}`);
        })
        .query( ({ input })=>{
            return `Hello ${input}!`;
        }),
});

export type AppRouter = typeof appRouter;
