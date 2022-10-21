export interface Message{
    id: number;
    sender: string;
    title: string;
    content: string;
    date: Date;
    isMessageNew: boolean;
}