import { ID } from "@directus/sdk"

export type BlockBuster ={
    id: ID,
    name: string;
    images: string[],
}

export type Collections = {
    blockbuster: BlockBuster
}