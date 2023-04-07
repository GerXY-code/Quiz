export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

declare class Quiz {
    id: number;
    title:string;
    category:string;
    is_private:boolean;

}


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {

    
    auth: {
        user: User;
        
    };

    
  
};
