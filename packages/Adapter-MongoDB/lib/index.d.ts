import { InanoSQLAdapter, InanoSQLTable, InanoSQLPlugin, InanoSQLInstance } from "@nano-sql/core/lib/interfaces";
import { MongoClientCommonOption } from "mongodb";
export declare class MongoDB implements InanoSQLAdapter {
    connectURL: string;
    databaseOptions?: MongoClientCommonOption | undefined;
    plugin: InanoSQLPlugin;
    nSQL: InanoSQLInstance;
    private _id;
    private _db;
    private _client;
    private _tableConfigs;
    constructor(connectURL: string, databaseOptions?: MongoClientCommonOption | undefined);
    connect(id: string, complete: () => void, error: (err: any) => void): void;
    createTable(tableName: string, tableData: InanoSQLTable, complete: () => void, error: (err: any) => void): void;
    dropTable(table: string, complete: () => void, error: (err: any) => void): void;
    disconnect(complete: () => void, error: (err: any) => void): void;
    write(table: string, pk: any, row: {
        [key: string]: any;
    }, complete: (pk: any) => void, error: (err: any) => void): void;
    read(table: string, pk: any, complete: (row: {
        [key: string]: any;
    } | undefined) => void, error: (err: any) => void): void;
    readMulti(table: string, type: "range" | "offset" | "all", offsetOrLow: any, limitOrHigh: any, reverse: boolean, onRow: (row: {
        [key: string]: any;
    }, i: number) => void, complete: () => void, error: (err: any) => void): void;
    delete(table: string, pk: any, complete: () => void, error: (err: any) => void): void;
    getTableIndex(table: string, complete: (index: any[]) => void, error: (err: any) => void): void;
    getTableIndexLength(table: string, complete: (length: number) => void, error: (err: any) => void): void;
    createIndex(tableId: string, index: string, type: string, complete: () => void, error: (err: any) => void): void;
    deleteIndex(tableId: string, index: string, complete: () => void, error: (err: any) => void): void;
    addIndexValue(tableId: string, index: string, key: any, value: any, complete: () => void, error: (err: any) => void): void;
    deleteIndexValue(tableId: string, index: string, key: any, value: any, complete: () => void, error: (err: any) => void): void;
    readIndexKey(tableId: string, index: string, pk: any, onRowPK: (pk: any) => void, complete: () => void, error: (err: any) => void): void;
    readIndexKeys(tableId: string, index: string, type: "range" | "offset" | "all", offsetOrLow: any, limitOrHigh: any, reverse: boolean, onRowPK: (key: any, id: any) => void, complete: () => void, error: (err: any) => void): void;
}
