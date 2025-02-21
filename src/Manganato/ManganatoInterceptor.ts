import { PaperbackInterceptor, Request, Response } from "@paperback/types";

export class NatoInterceptor extends PaperbackInterceptor {
  override async interceptRequest(request: Request): Promise<Request> {
    request.headers = {
      ...request.headers,
      referer: `https://m.manganelo.com/wwww`,
      origin: `https://m.manganelo.com/wwww`,
      "user-agent": await Application.getDefaultUserAgent(),
    };
    return request;
  }

  override async interceptResponse(
    request: Request,
    response: Response,
    data: ArrayBuffer,
  ): Promise<ArrayBuffer> {
    return data;
  }
}
