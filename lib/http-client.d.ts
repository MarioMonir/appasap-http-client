/**
 * Http Client for AppAsap
 *
 * GET /api/user?filter=%7B%7D&range=%5B0%2C9%5D&sort=%5B%22id%22%2C%22ASC%22%5D
 * @link: https://dev.to/nerdyman/replacing-query-string-with-native-urlsearchparams-4kdg
 * @author MarioMonir
 */
export type HttpClientInput = {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: BodyInit | null | undefined | object;
    headers?: {};
    queryParams?: any;
};
export type HttpClientOutput = {
    res: Response;
    data: any;
    ok: boolean;
    status: number;
    total: number;
};
export type HttpClient = (input: HttpClientInput) => Promise<HttpClientOutput>;
export declare const httpClient: HttpClient;
