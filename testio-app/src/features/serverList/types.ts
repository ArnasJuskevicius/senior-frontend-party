export interface ITById<T> {
    [key: string]: T;
}

export interface IList {
    uids: string[];
    byUid: ITById<IListItem>;
}

export interface IAPIResponse {
    distance: number;
    name: string;
}

export interface IListItem {
    distance: number;
    name: string;
    uid: string;
}