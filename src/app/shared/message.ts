export interface Message{
    id: string;
    sender: string;
    title: string;
    content: string;
    date: Date;
    isMessageNew: boolean;
}