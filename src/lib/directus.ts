import { Directus } from '@directus/sdk';
import { Collections } from './models';


const directus = new Directus<Collections>('https://91fuzb5q.directus.app/');


export default directus;