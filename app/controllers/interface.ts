import { IRouterParamContext } from "koa-router";

declare namespace controller {
  // 接口返回数据字段
  export interface ResBody {
    status: number;
    data: any;
    msg: string;
  }
  
  export interface Api_Controller {
    api: string,
    router: IRouterParamContext
  }
}

export = controller;
