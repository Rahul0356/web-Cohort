import {z} from 'zod';
import env from './env'
const envSchema = z.object({
    PORT: z.string().optional()
})

function createEnv(env:NodeJS.ProcessEnv){
envSchema.safeParse(env)
if(!validationResult.success) 
    throw new Error(validationResult.error.message);
return validationResult.data;
}

export const env = createEnv(process.env);
