

export interface AccountResponse {
    user: {
        dnarID: string;
        email: string;
        first_name: string;
        last_name: string;
        is_staff: boolean;
        is_active: boolean;
        created: Date;
        updated: Date;
    };
    access: string;
    refresh:string;
}